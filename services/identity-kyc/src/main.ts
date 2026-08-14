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
    .setTitle('Identity & KYC Service')
    .setDescription(
      'Manages onboarding, KYC verification state machine, and sanctions/PEP screening. ' +
      'Gates all money movement services.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Onboarding', 'User creation and profile management')
    .addTag('Verification', 'KYC document submission and approval state machine')
    .addTag('Screening', 'Sanctions and PEP watchlist checking')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.IDENTITY_PORT || 3002;
  await app.listen(port);
  console.log(`🆔 Identity KYC Service running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
