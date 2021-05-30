import {MigrationInterface, QueryRunner} from "typeorm";

export class initialDbStructure1622243111118 implements MigrationInterface {
    

    /**
     * Sql to be run in migration.
     * @param queryRunner TypeOrm db connection.
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log('test');
        await queryRunner.query(`CREATE TABLE authors (id varchar(36),name text,date_of_birth timestamp,Primary Key (id))`);
    }

    /**
     * Revert sql commands done in the up function.
     * @param queryRunner TypeOrm db connection.
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE authors`); 
    }

}
