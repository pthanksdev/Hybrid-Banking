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
    .setTitle('Memecoin & Bonding Curve Service')
    .setDescription('Fair-launch token creation platform with automated bonding curve pricing and DEX graduation.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Memecoins')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.MEMECOIN_PORT || 3009;
  await app.listen(port);
  console.log(`🚀 Memecoin Service running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
