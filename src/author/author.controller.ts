import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorCount } from './count.author.validator';

@Controller('author')
export class AuthorController {

    constructor(private readonly authorService:AuthorService){}

    @Get()
    getAu(@Query('count',new DefaultValuePipe(10),ParseIntPipe)count:number){
        return this.authorService.getAuthors(count);
    }
}
