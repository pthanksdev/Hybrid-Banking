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
    .setTitle('DeFi Integrations Service')
    .setDescription('Provides DEX swaps, yield farming, and staking integrations with double-entry ledger settlement.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('DeFi Swaps')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.DEFI_PORT || 3008;
  await app.listen(port);
  console.log(`⚡ DeFi Integrations Service running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
