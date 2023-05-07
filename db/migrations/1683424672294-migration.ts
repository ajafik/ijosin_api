import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683424672294 implements MigrationInterface {
    name = 'Migration1683424672294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "first_timer" ("id" SERIAL NOT NULL, "surname" character varying NOT NULL, "othernames" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_c15b57b313d97d48967dfceff97" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "first_timer"`);
    }

}
