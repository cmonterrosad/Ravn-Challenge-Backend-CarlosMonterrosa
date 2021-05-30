import { CacheInterceptor, Controller, DefaultValuePipe, Get, ParseIntPipe, Query, UseInterceptors} from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('author')
@UseInterceptors(CacheInterceptor)
export class AuthorController {

    constructor(private readonly authorService:AuthorService){}

    @Get()
    getAu(@Query('count',new DefaultValuePipe(10),ParseIntPipe)count:number){
        return this.authorService.getAuthors(count);
    }
}
