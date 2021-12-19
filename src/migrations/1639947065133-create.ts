import {MigrationInterface, QueryRunner} from "typeorm";

export class create1639947065133 implements MigrationInterface {
    name = 'create1639947065133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classrooms" ("id" SERIAL NOT NULL, "year" integer NOT NULL, "semester" integer NOT NULL, "professorId" integer, "courseId" integer, CONSTRAINT "PK_20b7b82896c06eda27548bd0c24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classes_exams" ("exam_id" integer NOT NULL, "class_id" integer NOT NULL, CONSTRAINT "PK_8feb8880e43c8d50863f14f3635" PRIMARY KEY ("exam_id", "class_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_17ac7c4bad6e6ef1ad74bdad3b" ON "classes_exams" ("exam_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_19ff2ea93e938038307045027a" ON "classes_exams" ("class_id") `);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD CONSTRAINT "FK_aa832943f3e82b532f3c155fa98" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classrooms" ADD CONSTRAINT "FK_4d346f10cf4dbc248e670f0192e" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes_exams" ADD CONSTRAINT "FK_17ac7c4bad6e6ef1ad74bdad3b1" FOREIGN KEY ("exam_id") REFERENCES "exams"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "classes_exams" ADD CONSTRAINT "FK_19ff2ea93e938038307045027a3" FOREIGN KEY ("class_id") REFERENCES "classrooms"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes_exams" DROP CONSTRAINT "FK_19ff2ea93e938038307045027a3"`);
        await queryRunner.query(`ALTER TABLE "classes_exams" DROP CONSTRAINT "FK_17ac7c4bad6e6ef1ad74bdad3b1"`);
        await queryRunner.query(`ALTER TABLE "classrooms" DROP CONSTRAINT "FK_4d346f10cf4dbc248e670f0192e"`);
        await queryRunner.query(`ALTER TABLE "classrooms" DROP CONSTRAINT "FK_aa832943f3e82b532f3c155fa98"`);
        await queryRunner.query(`DROP INDEX "IDX_19ff2ea93e938038307045027a"`);
        await queryRunner.query(`DROP INDEX "IDX_17ac7c4bad6e6ef1ad74bdad3b"`);
        await queryRunner.query(`DROP TABLE "classes_exams"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "classrooms"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "professors"`);
    }

}
