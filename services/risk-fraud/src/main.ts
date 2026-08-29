import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
  );

  const config = new DocumentBuilder()
    .setTitle('Risk & Fraud Engine')
    .setDescription('Real-time transaction risk scoring, velocity limit enforcement, and anti-fraud decision engine.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Risk & Fraud')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.RISK_PORT || 3010;
  await app.listen(port);
  console.log(`🛡️ Risk & Fraud Engine running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
