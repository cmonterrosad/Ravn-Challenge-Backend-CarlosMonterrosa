import { CacheInterceptor, Controller, DefaultValuePipe, Get, ParseIntPipe, Query, UseInterceptors} from '@nestjs/common';
import { Author } from 'src/entities/author.entity';
import { AuthorService } from './author.service';

@Controller('author')
@UseInterceptors(CacheInterceptor)
export class AuthorController {

    constructor(private readonly authorService:AuthorService){}

    @Get()
    getAuthors(@Query('count',new DefaultValuePipe(10),ParseIntPipe)count:number):Promise<Author[]>{
        return this.authorService.getAuthors(count);
    }
}
