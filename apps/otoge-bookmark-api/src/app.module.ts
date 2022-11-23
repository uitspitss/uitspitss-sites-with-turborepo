import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { SongsModule } from './songs/songs.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { validate } from './env.validation';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // If a variable is found in multiple files, the first one takes precedence.
      // REF: https://docs.nestjs.com/techniques/configuration#custom-env-file-path
      envFilePath: ['.env', '.env.development'],
      validate,
    }),
    GamesModule,
    SongsModule,
    PrismaModule,
    AuthModule,
    UsersModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
