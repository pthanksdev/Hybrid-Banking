import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  private readonly routes = [
    { prefix: '/api/v1/ledger', target: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001' },
    { prefix: '/api/v1/identity', target: process.env.IDENTITY_SERVICE_URL || 'http://localhost:3002' },
    { prefix: '/api/v1/banking', target: process.env.BANKING_SERVICE_URL || 'http://localhost:3003' },
    { prefix: '/api/v1/payments', target: process.env.PAYMENTS_SERVICE_URL || 'http://localhost:3004' },
    { prefix: '/api/v1/p2p', target: process.env.P2P_SERVICE_URL || 'http://localhost:3005' },
    { prefix: '/api/v1/custody', target: process.env.CUSTODY_SERVICE_URL || 'http://localhost:3006' },
    { prefix: '/api/v1/blockchain', target: process.env.BLOCKCHAIN_SERVICE_URL || 'http://localhost:3007' },
    { prefix: '/api/v1/defi', target: process.env.DEFI_SERVICE_URL || 'http://localhost:3008' },
    { prefix: '/api/v1/memecoins', target: process.env.MEMECOIN_SERVICE_URL || 'http://localhost:3009' },
    { prefix: '/api/v1/risk', target: process.env.RISK_SERVICE_URL || 'http://localhost:3010' },
    { prefix: '/api/v1/notifications', target: process.env.NOTIFICATIONS_SERVICE_URL || 'http://localhost:3011' },
    { prefix: '/api/v1/reporting', target: process.env.REPORTING_SERVICE_URL || 'http://localhost:3012' },
  ];

  use(req: Request, res: Response, next: NextFunction) {
    const route = this.routes.find((r) => req.originalUrl.startsWith(r.prefix));
    if (route) {
      const proxy = createProxyMiddleware({
        target: route.target,
        changeOrigin: true,
        pathRewrite: (path) => path.replace(route.prefix, ''),
      });
      return proxy(req, res, next);
    }
    next();
  }
}
