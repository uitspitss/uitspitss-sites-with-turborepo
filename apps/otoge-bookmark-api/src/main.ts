import fs from 'fs';
import {
  ValidationPipe,
  VersioningType,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { dump } from 'js-yaml';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // config
  const configService = app.get(ConfigService);

  // logger with winston
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  // cors
  if (['development', 'test'].includes(configService.get('NODE_ENV'))) {
    app.enableCors();
  } else {
    app.enableCors({
      origin: configService.get<string>('ALLOW_ORIGIN'),
    });
  }

  // helmet
  app.use(helmet());

  // pipes
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Otoge Bookmark API')
    .setDescription('Otoge Bookmark API')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // swagger file
  fs.writeFileSync('./swagger.yaml', dump(document, {}));

  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
