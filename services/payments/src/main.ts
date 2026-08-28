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
    .setTitle('Payments Service')
    .setDescription('Handles payment processing (Card, ACH, Wire) and records double-entry money movements in ledger-core.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Card Payments')
    .addTag('ACH Payments')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PAYMENTS_PORT || 3004;
  await app.listen(port);
  console.log(`💳 Payments Service running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
