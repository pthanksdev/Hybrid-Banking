import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerAggregatorService } from './swagger-aggregator/swagger-aggregator.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );

  const aggregator = app.get(SwaggerAggregatorService);

  // Serve unified aggregated Swagger spec on /docs
  app.use('/docs-spec', async (req: any, res: any) => {
    const spec = await aggregator.getMergedSwaggerSpec();
    res.json(spec);
  });

  const port = process.env.GATEWAY_PORT || 3000;
  await app.listen(port);
  console.log(`🌐 API Gateway running on port ${port}`);
  console.log(`📄 Unified Swagger Spec available at: http://localhost:${port}/docs-spec`);
  console.log(`🚀 Routing requests to 12 microservices via /api/v1/*`);
}
bootstrap();
