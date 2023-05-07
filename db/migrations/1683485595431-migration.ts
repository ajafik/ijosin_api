import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683485595431 implements MigrationInterface {
    name = 'Migration1683485595431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "date_of_birth" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "age_bracket" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "occupation" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "office_phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "office_address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "gender" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "marital_status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "spouse_attends_mfm" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "spouse_mfm_branch" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "spouse_church" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "spouse_phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "nationality" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "state_of_origin" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "lga" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "when_joined_mfm" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "previous_mfm_branch" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "done_foundational_class" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "foundational_class_when_where" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "visited" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "number_visited" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "groups" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "groups"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "number_visited"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "visited"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "foundational_class_when_where"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "done_foundational_class"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "previous_mfm_branch"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "when_joined_mfm"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "lga"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "state_of_origin"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "nationality"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "spouse_phone"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "spouse_church"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "spouse_mfm_branch"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "spouse_attends_mfm"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "marital_status"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "office_address"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "office_phone"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "occupation"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "age_bracket"`);
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "date_of_birth"`);
    }

}
