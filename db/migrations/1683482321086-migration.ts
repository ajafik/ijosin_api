import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683482321086 implements MigrationInterface {
    name = 'Migration1683482321086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "isActive" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "isActive"`);
    }

}
