import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TypeOrmConfigService}  from './config/typeorm.config.service';
import { ConfigModule } from '@nestjs/config';
import { HelloModule } from './hello/hello.module';
import { AuthorModule } from './author/author.module';
@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal:true
  }),
  TypeOrmModule.forRootAsync({
    useClass:TypeOrmConfigService,
    }),
    HelloModule,
    AuthorModule
  ],
})
export class AppModule {}
