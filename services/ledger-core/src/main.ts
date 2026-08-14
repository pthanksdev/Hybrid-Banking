import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Ledger Core Service')
    .setDescription(
      'Double-entry ledger API — the single source of truth for every balance on the platform. ' +
      'All money-movement services post entries here. Balances are computed, never stored.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Entries', 'Post and query ledger transactions')
    .addTag('Accounts', 'Ledger account management and balance queries')
    .addTag('Reconciliation', 'Ledger integrity verification')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.LEDGER_PORT || 3001;
  await app.listen(port);
  console.log(`🏦 Ledger Core running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
