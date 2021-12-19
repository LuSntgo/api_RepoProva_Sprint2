import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import ClassroomEntity from './ClassroomEntity';

@Entity("courses")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ClassroomEntity, classRoom => classRoom.course)
  classes: ClassroomEntity


}
