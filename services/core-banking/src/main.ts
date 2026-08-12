import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Core Banking Service')
    .setDescription(
      'Manages bank account lifecycle, interest calculations, and account statements. ' +
      'Balances are NOT stored locally — they are computed dynamically via ledger-core.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Bank Accounts', 'Account creation, freeze, and balance queries')
    .addTag('Interest', 'Daily interest accrual processing')
    .addTag('Statements', 'Account statement generation')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.BANKING_PORT || 3003;
  await app.listen(port);
  console.log(`🏦 Core Banking Service running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
