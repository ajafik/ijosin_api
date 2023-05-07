import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683487905384 implements MigrationInterface {
    name = 'Migration1683487905384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "done_foundational_class"`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "done_foundational_class" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "number_visited"`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "number_visited" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "number_visited"`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "number_visited" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "done_foundational_class"`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "done_foundational_class" character varying NOT NULL`);
    }

}
