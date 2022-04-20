import {MigrationInterface, QueryRunner} from "typeorm";

export class tableCreation1650410341363 implements MigrationInterface {
    name = 'tableCreation1650410341363'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "nickname" character varying NOT NULL, "gender" character varying NOT NULL, "phone" character varying NOT NULL, "adress" character varying NOT NULL, "comments" character varying NOT NULL, "profile_picture" character varying NOT NULL, CONSTRAINT "UQ_dd5c87ad2cd416a4d19b12fb921" UNIQUE ("cpf"), CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "persons"`);
    }

}
