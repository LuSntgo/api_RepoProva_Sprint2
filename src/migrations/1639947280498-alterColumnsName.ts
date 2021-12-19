import {MigrationInterface, QueryRunner} from "typeorm";

export class alterColumnsName1639947280498 implements MigrationInterface {
    name = 'alterColumnsName1639947280498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classrooms" DROP CONSTRAINT "FK_aa832943f3e82b532f3c155fa98"`);
        await queryRunner.query(`ALTER TABLE "classrooms" DROP CONSTRAINT "FK_4d346f10cf4dbc248e670f0192e"`);
        await queryRunner.query(`ALTER TABLE "classrooms" DROP COLUMN "professorId"`);
        await queryRunner.query(`ALTER TABLE "classrooms" DROP COLUMN "courseId"`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD "professor_id" integer`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD "course_id" integer`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD CONSTRAINT "FK_737839ac4cfaa1b3a8bfebf01fb" FOREIGN KEY ("professor_id") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD CONSTRAINT "FK_095f3e74ed049798ba312a62927" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classrooms" DROP CONSTRAINT "FK_095f3e74ed049798ba312a62927"`);
        await queryRunner.query(`ALTER TABLE "classrooms" DROP CONSTRAINT "FK_737839ac4cfaa1b3a8bfebf01fb"`);
        await queryRunner.query(`ALTER TABLE "classrooms" DROP COLUMN "course_id"`);
        await queryRunner.query(`ALTER TABLE "classrooms" DROP COLUMN "professor_id"`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD "courseId" integer`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD "professorId" integer`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD CONSTRAINT "FK_4d346f10cf4dbc248e670f0192e" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD CONSTRAINT "FK_aa832943f3e82b532f3c155fa98" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
