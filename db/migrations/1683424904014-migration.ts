import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683424904014 implements MigrationInterface {
    name = 'Migration1683424904014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" ADD "address" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" DROP COLUMN "address"`);
    }

}
