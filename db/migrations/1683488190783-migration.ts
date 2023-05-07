import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683488190783 implements MigrationInterface {
    name = 'Migration1683488190783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "date_of_birth"`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "date_of_birth_month" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "date_of_birth_day" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "date_of_birth_year" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "date_of_birth_year"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "date_of_birth_day"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "date_of_birth_month"`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "date_of_birth" TIMESTAMP NOT NULL`);
    }

}
