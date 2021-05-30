import { EntityRepository, Repository } from "typeorm";
import { Author } from "../entities/author.entity";

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author>{

    async getAuthorsWithCount(count:number):Promise<Author[]>{
        const query = this.createQueryBuilder('authors');
        query.limit(count);
        console.log(query)

        return query.getMany();
        
    }

}