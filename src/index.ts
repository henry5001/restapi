import { HestFactory } from '@hestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await HestFactory.create(AppModule);
  export default app;
}

bootstrap();