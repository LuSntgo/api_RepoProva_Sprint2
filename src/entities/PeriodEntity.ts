import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("periods")
export default class PeriodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
