import {MigrationInterface, QueryRunner} from "typeorm";

export class populateAuthor1622252536681 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Joe Abercrombie','1974-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Mark Lawrence','1973-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Steven Erikson','1980-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Random Joe','1971-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Glen Cook','1972-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Alex Marshall','1975-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Brent Week','1976-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Leigh Bardugo','1977-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'George R Martin','1978-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Gabriel Garcia Marquez','1979-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Madeline Miller','1986-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Neal Shusterman','1982-12-31')");
        await queryRunner.query("INSERT INTO `authors`(`id`,`name`, `date_of_birth`) VALUES(uuid(),'Holly Black','1987-12-31')");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`truncate authors`);
    }

}

