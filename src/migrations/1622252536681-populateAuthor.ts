import {MigrationInterface, QueryRunner} from "typeorm";

export class populateAuthor1622252536681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Joe Abercrombie','1974-12-31 00:04:01.000000')");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`truncate table authors`);
    }

}
