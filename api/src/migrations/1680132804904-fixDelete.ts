import { MigrationInterface, QueryRunner } from "typeorm";

export class fixDelete1680132804904 implements MigrationInterface {
    name = 'fixDelete1680132804904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "isActive"`);
    }

}
