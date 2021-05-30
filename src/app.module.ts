import { Module,CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TypeOrmConfigService}  from './config/typeorm.config.service';
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from './author/author.module';
@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal:true
  }),
  TypeOrmModule.forRootAsync({
    useClass:TypeOrmConfigService,
    }),
    AuthorModule,
    CacheModule.register(),
  ],
})
export class AppModule {}
