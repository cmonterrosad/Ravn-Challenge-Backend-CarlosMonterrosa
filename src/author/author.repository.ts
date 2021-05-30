import { EntityRepository, Repository } from "typeorm";
import { authors } from "../entities/author.entity";

@EntityRepository(authors)
export class AuthorRepository extends Repository<authors>{

    async getAuthorsWithCount(count:number):Promise<authors[]>{
        const query = this.createQueryBuilder('authors');
        query.limit(count);
        console.log(query)

        return query.getMany();
        
    }

}