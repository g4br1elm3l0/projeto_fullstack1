import { MigrationInterface, QueryRunner } from "typeorm";

export class fixEntitys1680282267629 implements MigrationInterface {
    name = 'fixEntitys1680282267629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_eff09bb429f175523787f46003b"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_eff09bb429f175523787f46003b" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "phone"`);
    }

}
