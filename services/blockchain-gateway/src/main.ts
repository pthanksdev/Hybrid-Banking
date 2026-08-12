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
    .setTitle('Blockchain Gateway Service')
    .setDescription('Monitors on-chain RPC nodes for EVM/Solana, processes deposit events, and records double-entry ledger entries.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Blockchain Gateway')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.BLOCKCHAIN_PORT || 3007;
  await app.listen(port);
  console.log(`🌐 Blockchain Gateway running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
