import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

export interface ServiceEndpoint {
  name: string;
  url: string;
  prefix: string;
}

@Injectable()
export class SwaggerAggregatorService {
  private readonly logger = new Logger(SwaggerAggregatorService.name);

  private readonly services: ServiceEndpoint[] = [
    { name: 'Ledger Core', url: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001', prefix: '/api/v1/ledger' },
    { name: 'Identity & KYC', url: process.env.IDENTITY_SERVICE_URL || 'http://localhost:3002', prefix: '/api/v1/identity' },
    { name: 'Core Banking', url: process.env.BANKING_SERVICE_URL || 'http://localhost:3003', prefix: '/api/v1/banking' },
    { name: 'Payments', url: process.env.PAYMENTS_SERVICE_URL || 'http://localhost:3004', prefix: '/api/v1/payments' },
    { name: 'P2P Transfers', url: process.env.P2P_SERVICE_URL || 'http://localhost:3005', prefix: '/api/v1/p2p' },
    { name: 'Wallet Custody', url: process.env.CUSTODY_SERVICE_URL || 'http://localhost:3006', prefix: '/api/v1/custody' },
    { name: 'Blockchain Gateway', url: process.env.BLOCKCHAIN_SERVICE_URL || 'http://localhost:3007', prefix: '/api/v1/blockchain' },
    { name: 'DeFi Integrations', url: process.env.DEFI_SERVICE_URL || 'http://localhost:3008', prefix: '/api/v1/defi' },
    { name: 'Memecoin Engine', url: process.env.MEMECOIN_SERVICE_URL || 'http://localhost:3009', prefix: '/api/v1/memecoins' },
    { name: 'Risk & Fraud', url: process.env.RISK_SERVICE_URL || 'http://localhost:3010', prefix: '/api/v1/risk' },
    { name: 'Notifications', url: process.env.NOTIFICATIONS_SERVICE_URL || 'http://localhost:3011', prefix: '/api/v1/notifications' },
    { name: 'Reporting & Compliance', url: process.env.REPORTING_SERVICE_URL || 'http://localhost:3012', prefix: '/api/v1/reporting' },
  ];

  async getMergedSwaggerSpec() {
    const baseDocument: any = {
      openapi: '3.0.0',
      info: {
        title: 'Hybrid Banking, Blockchain & Meme Coin Platform — API Gateway',
        description:
          'Unified API documentation for all 12 platform microservices. ' +
          'All financial paths use double-entry ledger settlement, BigInt integer arithmetic, and unified identity access control.',
        version: '1.0.0',
      },
      servers: [{ url: 'http://localhost:3000', description: 'API Gateway Unified Host' }],
      paths: {},
      components: { schemas: {}, securitySchemes: { bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' } } },
    };

    for (const svc of this.services) {
      try {
        const response = await axios.get(`${svc.url}/docs-json`, { timeout: 2000 });
        const doc = response.data;

        if (doc && doc.paths) {
          Object.keys(doc.paths).forEach((path) => {
            const prefixedPath = `${svc.prefix}${path}`;
            baseDocument.paths[prefixedPath] = doc.paths[path];
          });
        }

        if (doc && doc.components && doc.components.schemas) {
          Object.assign(baseDocument.components.schemas, doc.components.schemas);
        }
      } catch (err: any) {
        this.logger.warn(`Could not aggregate Swagger spec from ${svc.name} (${svc.url}): ${err.message}`);
      }
    }

    return baseDocument;
  }
}
