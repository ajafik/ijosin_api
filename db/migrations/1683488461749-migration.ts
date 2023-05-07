import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683488461749 implements MigrationInterface {
    name = 'Migration1683488461749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" ALTER COLUMN "isActive" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" ALTER COLUMN "isActive" DROP DEFAULT`);
    }

}
