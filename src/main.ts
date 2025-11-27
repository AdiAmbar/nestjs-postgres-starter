import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import * as compression from 'compression';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');
  app.enableCors();
  app.use(passport.initialize());
  app.use(compression());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();