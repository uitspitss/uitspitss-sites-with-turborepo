import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import fs from 'fs';
import { dump } from 'js-yaml';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // config
  const configService = app.get(ConfigService);

  // cors
  app.enableCors();

  // pipes
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Otoge Bookmark API')
    .setDescription('Otoge Bookmark API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // swagger file
  fs.writeFileSync('./swagger.yaml', dump(document, {}));

  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
