import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import ClassroomEntity from './ClassroomEntity';

@Entity("professors")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ClassroomEntity, classRoom => classRoom.professor)
  classes: ClassroomEntity

}
