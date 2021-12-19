import {MigrationInterface, QueryRunner} from "typeorm";

export class createPeriod1639951496360 implements MigrationInterface {
    name = 'createPeriod1639951496360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bbc14f29c87ed4711853d931a77"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "UQ_bbc14f29c87ed4711853d931a77"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "period_id" integer`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "UQ_eeff633abeb875bf9343d676b18" UNIQUE ("period_id")`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "category_id" integer`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "UQ_bbc14f29c87ed4711853d931a77" UNIQUE ("category_id")`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_eeff633abeb875bf9343d676b18" FOREIGN KEY ("period_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bbc14f29c87ed4711853d931a77" FOREIGN KEY ("category_id") REFERENCES "categories_exam"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bbc14f29c87ed4711853d931a77"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_eeff633abeb875bf9343d676b18"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "UQ_bbc14f29c87ed4711853d931a77"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "UQ_eeff633abeb875bf9343d676b18"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "period_id"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "category_id" integer`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "UQ_bbc14f29c87ed4711853d931a77" UNIQUE ("category_id")`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bbc14f29c87ed4711853d931a77" FOREIGN KEY ("category_id") REFERENCES "categories_exam"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
