import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorController } from './author.controller';
import { AuthorRepository } from './author.repository';
import { AuthorService } from './author.service';

@Module({
    imports:[TypeOrmModule.forFeature([AuthorRepository]),CacheModule.register()],
    controllers: [AuthorController],
    providers:[AuthorService],
})
export class AuthorModule {}
