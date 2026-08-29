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
    .setTitle('Wallet Custody Service')
    .setDescription('Manages multi-chain deposit address generation and transaction signing via KMS.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Wallet Custody')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.CUSTODY_PORT || 3006;
  await app.listen(port);
  console.log(`🔑 Wallet Custody Service running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
