import {MigrationInterface, QueryRunner} from "typeorm";

export class createCategory1639949534881 implements MigrationInterface {
    name = 'createCategory1639949534881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories_exam" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_06ef55de424465acdfee213aee7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "category_id" integer`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "UQ_bbc14f29c87ed4711853d931a77" UNIQUE ("category_id")`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bbc14f29c87ed4711853d931a77" FOREIGN KEY ("category_id") REFERENCES "categories_exam"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bbc14f29c87ed4711853d931a77"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "UQ_bbc14f29c87ed4711853d931a77"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "created_at"`);
        await queryRunner.query(`DROP TABLE "categories_exam"`);
    }

}
