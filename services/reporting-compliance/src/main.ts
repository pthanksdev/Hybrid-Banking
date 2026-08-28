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
    .setTitle('Reporting & Compliance Service')
    .setDescription('Regulatory reporting engine (FinCEN SAR/CTR, audit logs, AML transaction monitoring).')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Compliance Reporting')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.REPORTING_PORT || 3012;
  await app.listen(port);
  console.log(`📊 Reporting & Compliance Service running on port ${port}`);
  console.log(`📄 Swagger docs: http://localhost:${port}/docs`);
}
bootstrap();
