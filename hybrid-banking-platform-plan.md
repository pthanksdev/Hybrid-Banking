# Hybrid Banking, Blockchain & Meme Coin Platform — Full Project Plan

## 1. Overview

This platform combines three systems under one ledger and one identity layer:

1. **Traditional banking** — fiat accounts, payments, P2P transfers
2. **Blockchain / web3** — custodial/non-custodial wallets, wallet-to-wallet transfers, DeFi
3. **Meme coin** — token launch, liquidity, trading

All three write to a single shared ledger so a user's fiat balance, custodied crypto, and token holdings stay reconciled and auditable in one place.

**Important context before building:** holding customer fiat funds typically requires a money transmitter license or a partner-bank relationship in every jurisdiction you operate in. Smart contracts (especially the meme coin) need independent audits before mainnet liquidity goes live. None of this document is legal advice — treat the compliance sections as a starting checklist to take to counsel.

---

## 2. Project Structure

```
banking-platform/
├── apps/
│   ├── web-app/                  # customer-facing web app
│   ├── mobile-app/               # iOS/Android client
│   ├── admin-console/            # internal ops, compliance, support tooling
│   └── merchant-portal/          # business/merchant accounts (optional, phase 2+)
│
├── services/
│   ├── identity-kyc/             # onboarding, KYC/AML, sanctions screening
│   ├── core-banking/             # fiat accounts, interest, statements
│   ├── payments/                 # ACH, wire, card rails, bank-linked transfers
│   ├── p2p-transfers/            # fiat + wallet P2P orchestration
│   │   ├── handle-resolution/    # username/phone/QR → account or wallet
│   │   ├── internal-settlement/  # off-chain/off-rail fast path
│   │   └── onchain-settlement/   # triggers blockchain-gateway for real tx
│   ├── wallet-custody/           # key management, custodial + non-custodial wallets
│   ├── blockchain-gateway/       # node access, tx broadcasting, chain indexing
│   ├── defi-integrations/        # swaps, staking, bridges, yield connectors
│   ├── memecoin-service/         # token contract management, launch, liquidity
│   ├── risk-fraud/               # transaction monitoring, scoring, velocity checks
│   ├── ledger-core/              # shared double-entry ledger (single source of truth)
│   ├── notifications/            # push, email, SMS
│   └── reporting-compliance/     # regulatory reports, audit trail exports
│
├── contracts/                    # smart contracts
│   ├── memecoin/                 # token contract, vesting, tax/reflection logic
│   └── shared/                   # reusable contract libraries
│
├── packages/                     # shared code across apps/services
│   ├── auth-sdk/
│   ├── ui-kit/
│   ├── types/
│   └── utils/
│
├── infra/
│   ├── terraform/                # cloud infrastructure as code
│   ├── kubernetes/                # service deployment manifests
│   └── ci-cd/                     # pipelines
│
├── docs/
│   ├── architecture/
│   ├── compliance/
│   ├── privacy/                   # data retention, DSAR handling, DPAs
│   └── api-specs/
│
├── tests/
│   ├── integration/                # cross-service flows (deposit → ledger → payout)
│   ├── load/                       # throughput/latency testing
│   └── chaos/                      # failure-injection tests (see 3.18)
│
└── tools/                         # internal scripts, codegen, test harnesses
```

Each service under `services/` should be independently deployable. Treat `ledger-core` as the one service every other service depends on for balance truth — nothing else should be allowed to mutate balances directly.

---

## 3. Features & Implementation Details

### 3.1 Identity & KYC (`identity-kyc`)

**What it does:** onboards users, verifies identity, screens against sanctions/PEP lists, and gates access to money-movement features until verification passes.

**How to implement:**
- Integrate a third-party KYC provider (e.g. Persona, Onfido, Sumsub) rather than building document verification and liveness checks yourself — this is a solved, heavily regulated problem.
- Store only the minimum PII needed; keep verification documents in encrypted object storage with strict access controls and audit logging on every read.
- Tiered verification: allow light accounts (view-only, small limits) before full KYC, then unlock full banking/P2P/wallet features after verification clears.
- Run ongoing sanctions/PEP re-screening (not just at onboarding) since watchlists change.
- Expose a KYC status field that every other service (`core-banking`, `p2p-transfers`, `wallet-custody`) checks before allowing money movement.
- Model verification as a state machine (`unverified` → `pending` → `verified` → `rejected`/`expired`) rather than a boolean — re-verification triggers (expired ID, changed address, risk flag) need a clean path back into review.
- Business/merchant accounts need a separate KYB (know-your-business) flow: entity documents, beneficial ownership disclosure, and officer identity checks, distinct from individual KYC.
- Log every verification decision with the provider's response payload retained for audit — regulators will ask "why was this user approved/denied" years later.
- Build a manual review queue in `admin-console` for cases the automated provider flags as inconclusive, with a clear escalation path to a compliance officer.

### 3.2 Core Banking (`core-banking`)

**What it does:** manages fiat accounts, balances, interest, and statements.

**How to implement:**
- Accounts hold no balance themselves — balance is always derived by summing entries in `ledger-core`. This avoids the classic bug where a service's local balance drifts from the ledger.
- Interest accrual runs as a scheduled job that posts ledger entries (don't silently mutate a balance field).
- Statements are generated by querying `ledger-core` for a date range and rendering to PDF — never store a separate "statement balance" that could go stale.
- Partner with a licensed bank (banking-as-a-service provider) or pursue your own charter for actually holding fiat and connecting to payment rails — this is a legal/business decision, not just an engineering one.
- Support multiple account types (checking-style spending account, savings with interest, and later merchant/business accounts) as distinct account records in the ledger schema, not just a flag on one account type — they typically have different regulatory treatment and interest rules.
- Account freezes and holds (for fraud review, legal holds, chargebacks) should be modeled as a state on the account that blocks new debits but is fully auditable and reversible — never delete or hide a frozen account's data.
- Build account closure as a real workflow: settle pending transactions, zero out the balance via a payout, and retain records per your data retention policy rather than hard-deleting the account.
- Rate limit and monitor for common core-banking abuse patterns like structuring (repeated deposits just under reporting thresholds).

### 3.3 Payments (`payments`)

**What it does:** moves money in and out of the platform via ACH, wire, and card networks.

**How to implement:**
- Integrate with a payments processor/BaaS partner (e.g. via their API) rather than connecting directly to ACH/SWIFT networks yourself.
- Model each external payment as a two-phase process: `pending` → `settled`/`failed`, since bank rails are not instant. The ledger should reflect pending vs. available balance separately.
- Reconcile daily against the processor's settlement reports — automated reconciliation jobs that flag any mismatch between your ledger and the processor's records.
- Idempotency keys on every payment request to prevent duplicate charges on retry.
- Card issuing (if you plan to offer debit cards) is typically a separate integration with a card processor/issuer-processor — treat it as its own sub-module with its own authorization, settlement, and dispute (chargeback) handling flow.
- Support multiple funding methods (linked external bank account via account/routing number or Plaid-style aggregator, wire, card top-up) and normalize them into the same `pending → settled` model so the rest of the system doesn't need to know which rail was used.
- Build a clear returns/reversal path for ACH returns (e.g. insufficient funds, unauthorized) since these can happen days after the original transaction posted — the ledger needs to support posting a reversing entry against an already-settled transaction.
- Track per-rail fees and expose them transparently in transaction history, since fee handling errors are a common source of support tickets and disputes.

### 3.4 P2P Transfers (`p2p-transfers`)

**What it does:** lets users send money to each other by handle, phone, email, or QR code — across fiat and wallets.

**How to implement:**
- `handle-resolution`: a lookup service mapping usernames/phone numbers/QR payloads to an internal account ID or wallet address. Cache aggressively since this is called on every transfer.
- `internal-settlement`: if sender and recipient are both on-platform, skip external rails entirely — just post two offsetting entries in `ledger-core`. This is what makes P2P instant and free.
- `onchain-settlement`: only invoked for wallet-to-wallet transfers going to an external (non-custodied) address — hands off to `blockchain-gateway`.
- Velocity and amount limits tuned specifically for P2P fraud patterns (account takeover, romance/scam transfers) — these differ from card fraud patterns, so don't reuse card fraud rules as-is.
- First-time recipient warnings: if a user sends to a handle or address they've never sent to before, show a confirmation step with the recipient's verified name/handle to reduce misdirected/scam payments.
- Support "request money" as a first-class object (not just a send in reverse): a request creates a pending record the recipient can approve, decline, or ignore, with reminders and expiry.
- Split/group payments (e.g. splitting a bill) can be built as a parent request with multiple child requests, each independently trackable — resist modeling it as one transaction, since partial completion is common.
- QR codes should encode a signed payload (recipient handle + optional fixed amount) rather than a raw address, so you can validate and version the format, and support both "scan to pay me" and "scan to pay this exact amount" flows.
- Handle disputes for P2P separately from card disputes — since P2P is typically treated as "authorized push payment" even when the user was scammed, your dispute process needs its own policy (which may differ from chargeback-eligible card transactions) and should be clearly communicated to users before they send.

### 3.5 Wallet Custody (`wallet-custody`)

**What it does:** manages crypto wallets — both custodial (you hold keys) and support for connecting non-custodial (user holds keys) wallets.

**How to implement:**
- For custodial wallets, use MPC (multi-party computation) or HSM-backed key management — never store raw private keys in a regular database, even encrypted. Key material should never exist whole in one place.
- Support wallet connect standards (WalletConnect, etc.) for users who want to link an external non-custodial wallet instead of a custodial one.
- Decide early: does an internal wallet-to-wallet transfer between two of your custodied wallets touch the blockchain, or just update ledger balances? Off-chain updates are instant and free but require airtight reconciliation between your ledger and actual on-chain balances (see 3.9).
- Withdrawal to external wallets always goes through `blockchain-gateway` and should have step-up authentication (2FA re-prompt) given irreversibility.
- Key generation, signing, and storage should run in an isolated, hardened environment (dedicated HSM cluster or MPC node network) separate from your general application infrastructure — a compromise of your main app servers should not be able to reach signing keys.
- Implement withdrawal limits and cool-down periods for newly added withdrawal addresses (e.g. a 24-48 hour delay before a first-time address can receive a large withdrawal), a common pattern for limiting account-takeover damage.
- Maintain hot/warm/cold wallet tiers: a small hot wallet for immediate withdrawal liquidity, with the bulk of custodied assets in cold storage requiring multi-party approval to move — don't keep 100% of custodied funds in a hot wallet.
- Provide users a clear, exportable view of what you custody vs. what they self-custody, and make the tradeoffs (convenience vs. control) explicit in the UI rather than assumed.

### 3.6 Blockchain Gateway (`blockchain-gateway`)

**What it does:** the platform's single interface to actual blockchain networks — broadcasting transactions, reading balances, indexing activity.

**How to implement:**
- Use node providers (Alchemy, Infura, QuickNode) rather than running your own nodes initially — reduces operational burden while you validate the product.
- Build an indexing layer that listens for relevant on-chain events (deposits to custodied addresses, confirmations) and writes corresponding entries into `ledger-core`.
- Gas estimation and fee abstraction: consider sponsoring gas for certain user-facing transactions (account abstraction / paymasters) so users don't need to hold native gas tokens to transact.
- Every outbound transaction should have retry/replace-by-fee logic for stuck transactions, and clear status tracking (`broadcast` → `pending` → `confirmed`/`failed`).
- Use multiple node providers behind a failover layer — a single provider outage shouldn't take down withdrawals or deposits platform-wide.
- Require a minimum confirmation count before crediting a deposit to a user's available balance, scaled to the value of the transaction and the chain's typical reorg risk (larger deposits wait for more confirmations).
- Build chain-agnostic abstractions in code (a common transaction/balance interface) even if you launch with one chain, so adding a second chain later is a matter of implementing an adapter, not a rewrite.
- Monitor mempool and gas price trends to set sane default fees, and surface "slow/standard/fast" options to users the way most wallets do.

### 3.7 Wallet-to-Wallet Transfers

**What it does:** the crypto equivalent of P2P — direct transfers between wallet addresses.

**How to implement:**
- Same `p2p-transfers` orchestration layer, routed to `onchain-settlement` when the recipient isn't a custodied wallet, or `internal-settlement` when it is.
- Address book with saved/verified recipients; require explicit confirmation (and ideally a small test-amount suggestion) the first time a user sends to a new external address — most crypto losses come from mistyped or malicious addresses, and there's no reversal once broadcast.
- Support ENS-style human-readable addresses alongside raw hex addresses to reduce copy-paste errors.
- Show real-time gas fee estimates before the user confirms an on-chain send.
- Detect and flag sends to known contract addresses (e.g. accidentally sending to a token contract instead of a wallet) — a common and often unrecoverable mistake.
- For internal wallet-to-wallet transfers, still generate an on-chain-style transaction record in the user's history (even though nothing was broadcast) so their activity feed reads consistently regardless of settlement path.
- Support batched sends (one user paying multiple recipients in one action) at the orchestration layer, even if the underlying settlement fans out into multiple ledger entries or transactions.

### 3.8 DeFi Integrations (`defi-integrations`)

**What it does:** connects users to swaps, staking, and yield opportunities.

**How to implement:**
- Integrate with audited, established protocols via their SDKs rather than writing your own AMM or staking contracts initially — the security surface of DeFi is large and existing protocols have been through years of scrutiny.
- Treat every new protocol integration as a new attack surface: require a security review before adding it, and consider an allowlist model rather than open access to arbitrary contracts.
- Track all DeFi positions (staked amounts, LP positions) in `ledger-core` as a distinct asset class so they show up in the user's overall balance view.
- Simulate transactions before execution (using tools like Tenderly) to catch failing swaps or unexpectedly bad slippage before the user signs, rather than letting them discover it after a failed on-chain transaction.
- Set default slippage tolerances conservatively and let advanced users adjust them — high default slippage is a common vector for sandwich-attack losses.
- Clearly separate "your funds are staked/locked in a third-party protocol" from custodied balances in the UI — users should never confuse DeFi position risk (smart contract risk, impermanent loss) with the safety of a plain custodied balance.

### 3.9 Meme Coin (`memecoin-service` + `contracts/memecoin`)

**What it does:** issues and manages the platform's own token, including launch and trading support.

**How to implement:**
- Write the token contract using a well-audited base (e.g. OpenZeppelin's ERC-20 implementation) and keep custom logic (tax/reflection, burn, vesting) minimal and isolated — the more custom logic, the more audit risk.
- Get at least one independent third-party smart contract audit before deploying with real liquidity. Budget time for this — it's not a formality, findings often require rework.
- Implement anti-bot/anti-snipe protections for launch (e.g. max transaction limits in the first blocks, launch via a fair-launch mechanism rather than a pre-announced exact block).
- Liquidity pool setup on a DEX (Uniswap, etc.) with locked or time-vested liquidity to build trust — unlocked liquidity is a major rug-pull red flag to your own users.
- Price charting and holder analytics can be built by indexing on-chain events via `blockchain-gateway` rather than a separate system.
- Get legal review on how the token is marketed — framing around profit expectations or "investment" language routinely triggers securities law analysis regardless of how the token is technically structured.
- Publish the contract source and audit report publicly and make ownership/admin functions (mint, pause, blacklist) transparent — undisclosed owner privileges are one of the most common reasons users flag a token as a scam.
- If any admin functions exist (e.g. pause, upgrade), put them behind a multisig and, ideally, a timelock so no single key can unilaterally act on the contract — and disclose this control structure publicly.
- Build trading UI safeguards: price impact warnings for large trades against thin liquidity, and clear display of holder concentration (e.g. top wallet holds X% of supply) so users can assess risk themselves.
- Plan for tax/reporting implications of trades on your platform (transaction history exports users can hand to a tax preparer), since token trading generates taxable events in most jurisdictions.

### 3.10 Risk & Fraud (`risk-fraud`)

**What it does:** scores transactions and accounts for fraud risk across all three domains.

**How to implement:**
- Build one risk-scoring pipeline that ingests signals from all domains (fiat payments, P2P, wallet transfers, meme coin trades) rather than three separate fraud systems — patterns often span domains (e.g. account takeover followed by draining via P2P and wallet transfer).
- Rule-based checks first (velocity limits, new-device flags, geographic anomalies), layering in a machine-learned model once you have enough labeled fraud data.
- Real-time blocking for high-confidence fraud, async review queues for medium-confidence cases.
- Device fingerprinting and session risk scoring (new device, new location, impossible travel) feeding into a per-session risk level that other services can query before allowing sensitive actions.
- Maintain a shared denylist/allowlist system (blocked device IDs, flagged wallet addresses known to be associated with scams, sanctioned addresses) that both the fiat and crypto sides consult.
- Give `admin-console` a case management view for flagged transactions/accounts, with clear SLAs for review so legitimate users aren't stuck in limbo indefinitely.
- Track false-positive rates alongside catch rates — an overly aggressive fraud system that blocks legitimate P2P and wallet transfers will drive users away just as surely as fraud losses will.

### 3.11 Shared Ledger (`ledger-core`)

**What it does:** the single source of truth for every balance on the platform — fiat, custodied crypto, and token holdings.

**How to implement:**
- Double-entry accounting model: every transaction is two or more balanced entries (debit/credit) across accounts. This makes the ledger self-verifying — total debits must always equal total credits.
- Immutable, append-only entries. Corrections are made via new offsetting entries, never by editing or deleting past records — this is what makes the ledger auditable.
- Every other service (banking, P2P, wallet, meme coin) posts to this ledger rather than maintaining its own balance state. Treat direct balance mutation outside the ledger as a bug class to actively prevent in code review.
- Regular automated reconciliation jobs comparing ledger state against external sources of truth (bank processor reports, on-chain balances) with alerting on any drift.
- Model each asset type (USD, ETH, the meme coin, staked positions) as a distinct account/currency within the ledger schema rather than trying to force everything into one unit — conversions between them are themselves ledger entries with an explicit rate recorded.
- Use fixed-point/integer arithmetic for all monetary and token amounts (smallest unit — cents, wei, etc.), never floating point, to avoid rounding errors compounding across millions of transactions.
- Design the schema to support point-in-time balance queries ("what was this account's balance at 11:59pm on March 3rd") since compliance reports and disputes often need historical, not just current, state.
- Version the ledger's transaction/entry schema carefully — this is the one part of the system where a breaking migration is extremely costly given the volume and permanence of the data.

### 3.12 Reporting & Compliance (`reporting-compliance`)

**What it does:** generates the regulatory reports and audit trails examiners and regulators will require.

**How to implement:**
- Build audit logging as a cross-cutting concern from day one (who did what, when, to which account) rather than bolting it on later — retrofitting audit trails is far more expensive than building them in.
- Automate generation of jurisdiction-specific reports (large transaction reports, suspicious activity reports) by querying `ledger-core` and `risk-fraud` outputs.
- Keep a clear data retention policy aligned with your regulatory obligations, balanced against user privacy requirements.

### 3.13 Notifications (`notifications`)

**What it does:** delivers push, email, and SMS notifications for account activity, security events, and marketing (where consented).

**How to implement:**
- Treat transactional notifications (money received, security alert, large withdrawal confirmation) as high priority with guaranteed delivery retries, separate from lower-priority marketing sends.
- Use a template system with per-locale content so notification copy can be localized without code changes.
- Let users configure notification preferences per category (security alerts should not be fully disable-able; marketing should be opt-in), and respect regional consent laws (e.g. SMS/email marketing opt-in rules).
- Security-critical notifications (new device login, withdrawal address added) should fire immediately and through a channel the user is likely to see fast (push + email), since these are the ones that let a user catch fraud in progress.

### 3.14 Admin Console (`admin-console`)

**What it does:** internal tooling for support, compliance, risk, and operations staff.

**How to implement:**
- Build role-based access control from the start — support agents, compliance officers, and engineers need very different levels of access to user data and money-movement actions.
- Every admin action (freezing an account, reversing a transaction, approving a KYC exception) should itself post an audit log entry and, where it touches money, a ledger entry — admins are not exempt from the "everything goes through the ledger" rule.
- Build dedicated views per domain: a case queue for `risk-fraud` flags, a KYC review queue for `identity-kyc`, a transaction lookup tool spanning `ledger-core`, and chain explorer links for on-chain activity.
- Require step-up authentication (hardware key or equivalent) for the most sensitive admin actions like manually adjusting a balance or releasing a large withdrawal.

### 3.15 Merchant Portal (`merchant-portal`)

**What it does:** lets businesses accept payments (fiat and/or crypto) on the platform — phase 2+ feature.

**How to implement:**
- Reuse `identity-kyc`'s business/KYB flow rather than building a separate one.
- Provide a payment acceptance API/SDK (hosted checkout page + webhooks) so merchants can integrate without handling raw payment data themselves.
- Support settlement in the merchant's currency of choice (fiat payout, or holding in the meme coin/other crypto if they choose), with clear, itemized fee statements.
- Build merchant-specific fraud tooling (chargeback ratio monitoring, refund workflows) since merchant risk patterns differ from consumer P2P risk patterns.

### 3.16 Auth & Shared SDK (`packages/auth-sdk`)

**What it does:** the common authentication layer used by every app and enforced by every service.

**How to implement:**
- Use short-lived access tokens (JWT or similar) plus refresh tokens, with the KYC/verification status and risk level embedded or fetchable so downstream services can make fast authorization decisions.
- Enforce MFA for all accounts, with step-up (re-authentication) required for sensitive actions: adding a withdrawal address, changing recovery contact info, large P2P/wallet sends.
- Support passkeys/WebAuthn in addition to traditional MFA (SMS/TOTP) to reduce SIM-swap-based account takeover risk, which is a leading cause of fraud in fintech and crypto apps specifically.
- Centralize session management so a user can view and revoke active sessions/devices from any app, and so a security team can force-revoke sessions platform-wide during an incident.

### 3.17 Infrastructure & Security (`infra/`)

**What it does:** the deployment, scaling, and security foundation everything else runs on.

**How to implement:**
- Isolate services by trust boundary: put `wallet-custody` and key-signing infrastructure in their own tightly locked-down network segment, separate from general application services — a breach of the web app tier should not have a path to signing keys.
- Use infrastructure-as-code (Terraform) for everything, with changes going through code review — manual infrastructure changes are a common source of both outages and security gaps.
- Set up centralized logging and monitoring (metrics, traces, alerts) from day one, with specific alerting on ledger reconciliation drift, failed KYC provider calls, and unusual withdrawal volume.
- Run regular third-party penetration tests and, before any meme coin mainnet launch, a dedicated smart contract audit — schedule these as recurring line items in the roadmap, not one-time events.
- Build a documented incident response plan (who gets paged, how to freeze affected accounts, how to communicate with users and regulators) before you have real customer funds live — this should exist before you need it, not be written during an incident.

### 3.18 Testing & QA Strategy

**What it does:** ensures correctness of money-movement logic before it reaches production, where bugs are expensive and often irreversible.

**How to implement:**
- Treat `ledger-core` as the most heavily tested piece of the system: property-based tests that assert double-entry invariants hold (debits always equal credits) across randomized transaction sequences, not just example-based unit tests.
- Run a shadow/staging environment against testnets (for blockchain) and sandbox modes (for payment processors and KYC providers) that mirrors production as closely as possible, so integration bugs surface before mainnet/real-money deployment.
- Build chaos/failure-injection tests for the reconciliation jobs specifically — simulate a processor reporting a settlement late, a node provider going down mid-broadcast, or a duplicate webhook delivery, and confirm the system recovers to a consistent state.
- Require smart contracts to have both unit test coverage and a fuzzing pass (e.g. Foundry's fuzzing) in addition to the external audit — audits catch what tests miss, but a well-tested contract makes the audit more productive.
- Maintain a regression suite specifically for previously fixed money-handling bugs — these are the ones most likely to reappear silently after refactors.

### 3.19 API Design & Documentation (`docs/api-specs`)

**What it does:** the contract between your services, your own client apps, and any future third-party integrators (merchants, partners).

**How to implement:**
- Design internal service-to-service APIs and external-facing APIs separately from the start — external APIs need stricter versioning discipline and backward compatibility guarantees once partners depend on them.
- Use a schema-first approach (OpenAPI/protobuf) so client SDKs, documentation, and server stubs can be generated from one source of truth rather than drifting out of sync.
- Version every public API explicitly (e.g. `/v1/`) and commit to a deprecation policy with advance notice before breaking changes — this matters more here than in most systems, since integrators may be moving real money through these endpoints.
- Provide sandbox/test-mode API keys for any external developer (merchant) integration, mirroring the testnet approach used internally.

### 3.20 Data Privacy & Regulatory Compliance (beyond financial regulation)

**What it does:** handles user data protection obligations (GDPR, CCPA, and equivalents) that sit alongside — and sometimes in tension with — financial recordkeeping requirements.

**How to implement:**
- Map every category of PII you store to both a legal basis for holding it and a retention period, since financial regulations often *require* long retention (5-7 years is common) while privacy law gives users deletion rights — reconcile this explicitly rather than discovering the conflict during an audit.
- Support data subject access and deletion requests operationally, understanding that "deletion" for a financial services company usually means anonymizing/restricting rather than full erasure of transaction records you're legally required to retain.
- Encrypt PII at rest and in transit by default, and segment PII storage from transactional/ledger data so access to one doesn't automatically grant access to the other.
- Get a data processing agreement in place with every third-party vendor that touches user PII (KYC provider, payment processor, cloud provider, analytics tools).

### 3.21 Disaster Recovery & Business Continuity

**What it does:** keeps the platform recoverable if infrastructure, a vendor, or a region fails.

**How to implement:**
- Define recovery point objective (RPO) and recovery time objective (RTO) per service — `ledger-core` and `wallet-custody` should have the tightest targets given they're the hardest to recover incorrectly.
- Run automated, tested backups of the ledger and key databases with regular restore drills — an untested backup is not a backup.
- For custody infrastructure specifically, plan for key recovery scenarios (loss of an MPC node, HSM failure) using threshold schemes so no single point of failure can permanently lock funds.
- Maintain a status page and a pre-drafted communication plan for outages — in financial services, silence during an incident erodes trust faster than the incident itself.

### 3.22 Customer Support Tooling

**What it does:** gives support staff the context they need to help users without over-exposing sensitive data.

**How to implement:**
- Build a unified support view in `admin-console` pulling account status, recent transactions, KYC status, and open risk flags into one screen — support agents constantly context-switching between systems is a common source of slow, error-prone service.
- Mask sensitive data (full account numbers, private keys — which support should never be able to see at all) by default, with granular, logged permission escalation for the rare case full detail is needed.
- Provide a clear internal escalation path from support to risk/compliance for anything touching a frozen account, suspected fraud, or a KYC exception — support agents shouldn't be making compliance judgment calls themselves.
- Track support ticket categories against product areas (P2P disputes, failed withdrawals, KYC delays) to feed back into product and engineering priorities.

### 3.23 Internationalization & Multi-Currency

**What it does:** supports users and currencies beyond a single home market, if the platform expands beyond one country.

**How to implement:**
- Treat currency as a first-class dimension in `ledger-core` from the start (see 3.11) even if you launch single-currency — retrofitting multi-currency into a ledger designed for one currency is a major migration.
- Localize not just UI text but also formatting (currency symbols, date formats, number separators) and compliance requirements (KYC document types accepted vary significantly by country).
- Handle FX conversion as an explicit, rate-stamped ledger transaction whenever a user moves value between currencies, never an implicit calculation done at display time.
- Expect different regulatory regimes to require different features per market (e.g. mandatory cooling-off periods, different reporting thresholds) — design the compliance layer to be configurable per jurisdiction rather than hardcoded to one country's rules.

---

## 4. Phased Roadmap

1. **Foundation** — `ledger-core`, `identity-kyc`, basic `core-banking` accounts, `admin-console` (support/compliance views), `packages/auth-sdk`, core test suite for the ledger (3.18)
2. **Payments** — bank rail integration via `payments`, internal transfers, `risk-fraud` v1, `notifications` (transactional), initial `docs/api-specs`
3. **P2P (fiat)** — `p2p-transfers` internal settlement, handle resolution, fraud rules tuned for P2P, customer support tooling (3.22) for P2P disputes
4. **Wallets & custody** — `wallet-custody`, `blockchain-gateway`, single-chain support, key-signing infrastructure isolation (3.17)
5. **Wallet-to-wallet** — extend `p2p-transfers` to on-chain settlement, address book, warnings, chain-agnostic abstractions
6. **DeFi layer** — `defi-integrations`, multi-chain expansion, transaction simulation
7. **Meme coin** — contract development, audit, launch, liquidity, market tooling, admin multisig/timelock
8. **Compliance & privacy hardening** — `reporting-compliance` reports, GDPR/CCPA workflows (3.20), data retention policy finalized, disaster recovery drills (3.21)
9. **Merchant & business expansion** — `merchant-portal`, KYB flow, payment acceptance SDK, merchant fraud tooling (optional, based on business direction)
10. **Scale & internationalization** — multi-currency support (3.23), localized compliance rules per market, load testing at target scale
11. **Hardening** — third-party penetration tests, repeat smart contract audit for any new contract logic, incident response plan finalized and drilled, chaos testing across reconciliation jobs

Steps 1-7 are the core build; 8-11 are what typically separates a working prototype from something ready to hold real customer funds at scale — budget real time for them rather than treating them as an afterthought.

---

## 5. Cross-Cutting Principles

- **One ledger.** Every balance-affecting action across all domains posts to `ledger-core`. No service maintains its own shadow balance.
- **One identity.** A single KYC/auth status gates access to banking, P2P, and wallet features consistently.
- **One risk engine.** Fraud signals from fiat, P2P, and crypto feed a shared scoring pipeline.
- **Audit everything.** Every money-movement action — including admin actions — is logged immutably from the start.
- **Irreversibility awareness.** On-chain and P2P transfers are effectively irreversible — the UX should warn accordingly, unlike card payments which have dispute mechanisms.
- **Test the money paths hardest.** Ledger correctness and reconciliation logic get the deepest test coverage (property-based tests, chaos tests) of anything in the system, since bugs here are the most expensive and least reversible.
- **Privacy and retention are reconciled, not assumed.** Every PII field has both a stated retention requirement and a stated privacy obligation, decided explicitly rather than left to conflict later.
- **Recoverability is designed in, not bolted on.** RPO/RTO targets and key-recovery schemes for custody are defined before the service goes live with real funds, not after an incident.
