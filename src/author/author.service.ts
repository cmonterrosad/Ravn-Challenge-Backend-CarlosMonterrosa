import { Injectable } from "@nestjs/common";
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
        return this.authorRepository.getAuthorsWithCount(count);
    }

}