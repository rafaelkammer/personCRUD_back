import {MigrationInterface, QueryRunner} from "typeorm";

export class tableCorrection1650418614416 implements MigrationInterface {
    name = 'tableCorrection1650418614416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persons" RENAME COLUMN "adress" TO "address"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persons" RENAME COLUMN "address" TO "adress"`);
    }

}
