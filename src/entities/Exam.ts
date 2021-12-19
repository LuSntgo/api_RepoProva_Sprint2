import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import ClassroomEntity from './ClassroomEntity';

@Entity("exams")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToMany(() => ClassroomEntity, classRoom => classRoom.id)
  @JoinTable({
      name: 'classes_exams',
      joinColumn: {
          name: 'exam_id',
          referencedColumnName: 'id'
      },
      inverseJoinColumn: {
          name: 'class_id',
          referencedColumnName: 'id',
      }
  })
  classes: ClassroomEntity[]
  
}
