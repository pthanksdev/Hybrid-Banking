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
    .setTitle('P2P Transfers Service')
    .setDescription('Handles peer-to-peer instant transfers with idempotency and double-entry posting to ledger-core.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('P2P Transfers')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.P2P_PORT || 3005;
  await app.listen(port);
  console.log(`💸 P2P Transfers Service running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
