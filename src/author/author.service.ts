import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { authors } from "../entities/author.entity";
import { AuthorRepository } from "./author.repository";

@Injectable()
export class AuthorService{

    constructor(
        @InjectRepository(AuthorRepository)
        private authorRepository:AuthorRepository,
    ){}

    async getAuthors(count:number):Promise<authors[]>{
        if(count < 0){
            throw new BadRequestException('count must be greater than 0');
        }
        return this.authorRepository.getAuthorsWithCount(count);
    }

}