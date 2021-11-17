import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.APP_PORT || 4000;

  await app.listen(port, () => {
    console.log(`application running on port ${port}`);
  });
}
bootstrap();
