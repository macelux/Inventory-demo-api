import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as connectionOptions from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => connectionOptions,
    // }),
    TypeOrmModule.forRoot(connectionOptions),
    ProductsModule,
    DatabaseModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
