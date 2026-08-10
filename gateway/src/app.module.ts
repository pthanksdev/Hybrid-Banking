import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AuthModule } from '@hybrid-banking/auth-sdk';
import { SwaggerAggregatorService } from './swagger-aggregator/swagger-aggregator.service';
import { ProxyMiddleware } from './proxy/proxy.middleware';

@Module({
  imports: [
    AuthModule.forRoot({
      jwtSecret: process.env.JWT_SECRET || 'super-secret-jwt-key-change-in-prod',
    }),
  ],
  providers: [SwaggerAggregatorService],
  exports: [SwaggerAggregatorService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProxyMiddleware).forRoutes('/api/v1/*');
  }
}
