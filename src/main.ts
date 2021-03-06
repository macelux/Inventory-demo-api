import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // include validation
  app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // swagger bootstrap
  const config = new DocumentBuilder()
    .setTitle('Inventory Demo Api')
    .setDescription('All API endpoints')
    .setVersion('1.0')
    .addTag('Inventory ')
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
    };
  const document = SwaggerModule.createDocument(app, config, options);
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Inventory API Docs',
  };
  SwaggerModule.setup('api', app, document, customOptions);


  // define application port
  const port = process.env.PORT || 5000;

  await app.listen(port, () => {
    console.log(`application running on port ${port}`);
  });

  if (process.env.APP_DEBUG) {
    // get all list of routes
    const server = app.getHttpServer();
    const router = server._events.request._router;
    const availableRoutes: [] = router.stack
      .map((layer) => {
        if (layer.route) {
          return {
            route: {
              path: layer.route?.path,
              method: layer.route?.stack[0].method,
            },
          };
        }
      })
      .filter((item) => item !== undefined);
    console.log(availableRoutes);
  }
}
bootstrap();
