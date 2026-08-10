# Backend Plan — Hybrid Banking, Blockchain & Meme Coin Platform

Stack: TypeScript + NestJS across all services, PostgreSQL for ledger/fiat data, bigint smallest-unit arithmetic (no floats), viem/ethers for chain-facing services, Solidity + OpenZeppelin + Foundry for contracts. Every service documents its API with Swagger/OpenAPI via `@nestjs/swagger`.

---

## 1. Backend Project Structure

```
backend/
├── services/
│   ├── identity-kyc/
│   │   ├── src/
│   │   │   ├── modules/
│   │   │   │   ├── onboarding/
│   │   │   │   ├── verification/         # KYC state machine
│   │   │   │   └── screening/             # sanctions/PEP
│   │   │   ├── main.ts                    # bootstraps Swagger at /docs
│   │   │   └── swagger.config.ts
│   │   └── test/
│   │
│   ├── core-banking/
│   │   ├── src/modules/{accounts,interest,statements}/
│   │   └── ...
│   │
│   ├── payments/
│   │   ├── src/modules/{ach,wire,card,reconciliation}/
│   │   └── ...
│   │
│   ├── p2p-transfers/
│   │   ├── src/modules/{handle-resolution,internal-settlement,onchain-settlement}/
│   │   └── ...
│   │
│   ├── wallet-custody/
│   │   ├── src/modules/{key-management,wallets,withdrawals}/
│   │   └── ...
│   │
│   ├── blockchain-gateway/
│   │   ├── src/modules/{broadcasting,indexing,fee-estimation}/
│   │   └── ...
│   │
│   ├── defi-integrations/
│   │   ├── src/modules/{swaps,staking,bridges}/
│   │   └── ...
│   │
│   ├── memecoin-service/
│   │   ├── src/modules/{token-management,launch,liquidity,analytics}/
│   │   └── ...
│   │
│   ├── risk-fraud/
│   │   ├── src/modules/{scoring,rules,case-management}/
│   │   └── ...
│   │
│   ├── ledger-core/
│   │   ├── src/modules/{entries,accounts,reconciliation}/
│   │   └── ...
│   │
│   ├── notifications/
│   │   ├── src/modules/{push,email,sms,preferences}/
│   │   └── ...
│   │
│   └── reporting-compliance/
│       ├── src/modules/{regulatory-reports,audit-export}/
│       └── ...
│
├── contracts/
│   ├── memecoin/               # Solidity, Foundry project
│   └── shared/
│
├── packages/
│   ├── auth-sdk/                 # shared auth guards, MFA, token handling
│   ├── types/                    # shared DTOs/Zod schemas used for Swagger + validation
│   ├── ledger-client/             # typed client for calling ledger-core internally
│   └── utils/
│
├── gateway/
│   ├── src/
│   │   ├── proxy/                  # routes requests to each service
│   │   └── swagger-aggregator/     # combines all service specs into one UI (see §3)
│   └── swagger.config.ts
│
├── infra/
│   ├── terraform/
│   ├── kubernetes/
│   └── ci-cd/
│
├── docs/
│   ├── architecture/
│   ├── compliance/
│   ├── privacy/
│   └── api-specs/                  # generated OpenAPI JSON per service, committed for diffing
│
└── tests/
    ├── integration/
    ├── load/
    └── chaos/
```

Each service is an independently deployable NestJS app with its own `main.ts`, its own Swagger doc, and its own database schema (or schema namespace) — no service reaches into another's tables directly; everything goes through APIs, and everything money-related ultimately posts to `ledger-core`.

---

## 2. Backend Feature Plan (per service)

### 2.1 `identity-kyc`
- Onboarding endpoints, KYC state machine (`unverified → pending → verified → rejected/expired`), sanctions/PEP screening via third-party provider (Persona/Onfido/Sumsub), manual review queue endpoints for admin use.
- Every other service checks KYC status via an internal endpoint or cached status token — never re-implements verification logic.

### 2.2 `core-banking`
- Account CRUD (checking/savings/business types), balance always computed by querying `ledger-core` (never stored locally), interest accrual jobs, statement generation endpoints.
- Account freeze/closure workflows as explicit state transitions, fully audited.

### 2.3 `payments`
- ACH/wire/card integration endpoints via a processor/BaaS partner, two-phase `pending → settled/failed` transaction modeling, idempotency keys on all mutating endpoints, daily reconciliation jobs against processor reports.

### 2.4 `p2p-transfers`
- `handle-resolution`: lookup endpoints (username/phone/QR → account or wallet).
- `internal-settlement`: fast-path ledger postings for on-platform transfers.
- `onchain-settlement`: hands off to `blockchain-gateway` for external wallet sends.
- Request-money objects, split payments, first-time-recipient confirmation flow.

### 2.5 `wallet-custody`
- Key generation/signing isolated behind MPC/HSM, hot/warm/cold wallet tiering, withdrawal endpoints with step-up auth and cool-down periods for new addresses.

### 2.6 `blockchain-gateway`
- Transaction broadcasting with retry/replace-by-fee, multi-provider failover, confirmation-based crediting, on-chain event indexing that posts to `ledger-core`, gas estimation endpoints (slow/standard/fast).

### 2.7 `defi-integrations`
- Swap/stake/bridge endpoints wrapping audited protocol SDKs, pre-execution transaction simulation, configurable slippage limits, position tracking synced to `ledger-core`.

### 2.8 `memecoin-service`
- Token contract deployment/management endpoints, launch sequencing with anti-bot protections, liquidity pool setup, holder/price analytics endpoints (backed by `blockchain-gateway` indexing).

### 2.9 `risk-fraud`
- Real-time scoring endpoint (consumed by every money-movement path), rule engine, device/session risk endpoints, case management API for `admin-console`, shared denylist/allowlist endpoints.

### 2.10 `ledger-core`
- Entry-posting endpoint (double-entry, idempotent, append-only), balance query endpoints (current and point-in-time), reconciliation job endpoints, multi-asset/multi-currency account support.

### 2.11 `notifications`
- Send endpoints per channel (push/email/SMS), template management, per-user preference endpoints, guaranteed-delivery retry queue for transactional notifications.

### 2.12 `reporting-compliance`
- Scheduled and on-demand regulatory report generation, audit trail export endpoints, data retention job endpoints.

---

## 3. Swagger / OpenAPI Setup

**Per-service documentation:**
- Every NestJS service uses `@nestjs/swagger` to auto-generate an OpenAPI spec from decorated DTOs and controllers.
- Standard setup per `main.ts`:
```typescript
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const app = await NestFactory.create(AppModule);

const config = new DocumentBuilder()
  .setTitle('Ledger Core Service')
  .setDescription('Double-entry ledger API — internal use only')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document); // served at /docs

await app.listen(3000);
```
- Use shared DTO classes from `packages/types` decorated with `@ApiProperty()` so request/response shapes are consistent across services and reused by the frontend's generated client.

**Gateway-level aggregated Swagger UI:**
- The `gateway/swagger-aggregator` combines each service's OpenAPI JSON (fetched from `/docs-json` on each service) into a single merged spec, so there's one Swagger UI covering the whole backend rather than 12 separate ones.
- Tag each service's endpoints with its service name in the aggregated view (e.g. `ledger-core`, `payments`) so it stays navigable as the API surface grows.
- Serve the aggregated UI at a single internal URL (e.g. `api.internal.yourplatform.com/docs`), gated behind internal auth — this should not be publicly exposed given it documents internal money-movement endpoints.

**Public vs internal API docs:**
- Maintain a separate, smaller Swagger doc for any public-facing API (e.g. a future merchant/payment-acceptance API) — the public doc should only include endpoints intended for external integrators, not the full internal surface.
- Version public docs explicitly (`/v1/docs`) and commit to backward compatibility once external integrators depend on them.

**Keeping specs accurate:**
- Generate `docs/api-specs/*.json` as a build artifact from each service's Swagger doc and commit it, so API changes show up as diffs in code review — this catches accidental breaking changes before they ship.
- Add a CI check that fails the build if a controller endpoint lacks Swagger decorators (`@ApiOperation`, `@ApiResponse`), so documentation coverage doesn't silently drift from the actual API surface.

---

## 4. Backend-Only Phased Roadmap

1. **Foundation** — `ledger-core`, `identity-kyc`, `core-banking` accounts, `packages/auth-sdk`, `packages/types`, Swagger set up per service from day one (not retrofitted later)
2. **Payments & gateway** — `payments`, `notifications` (transactional), stand up the `gateway` with Swagger aggregation
3. **P2P** — `p2p-transfers` internal settlement, `risk-fraud` v1
4. **Wallets & chain** — `wallet-custody`, `blockchain-gateway`, key-signing isolation
5. **Wallet-to-wallet & DeFi** — on-chain settlement path, `defi-integrations`
6. **Meme coin** — `memecoin-service`, contracts, audit
7. **Compliance & hardening** — `reporting-compliance`, reconciliation jobs, CI Swagger-coverage checks, load/chaos tests in `tests/`

Every phase ends with its new service's Swagger docs reviewed for completeness and merged into the gateway's aggregated UI before moving to the next phase — treat "API is documented" as part of the definition of done, not a follow-up task.
