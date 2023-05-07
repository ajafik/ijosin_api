import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683488750044 implements MigrationInterface {
    name = 'Migration1683488750044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" ALTER COLUMN "number_visited" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "first_timer" ALTER COLUMN "number_visited" SET NOT NULL`);
    }

}
