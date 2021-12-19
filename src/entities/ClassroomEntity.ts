import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import ProfessorEntity from './ProfessorEntity';
import CourseEntity from './CourseEntity';


@Entity("classrooms")
export default class ClassRoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  year: number;

  @Column()
  semester: number;

  @ManyToOne(() => ProfessorEntity, professor => professor.id, { eager: true})
  @JoinColumn({ name: 'professor_id'})
  professor: ProfessorEntity

  @ManyToOne(() => CourseEntity, course => course.id)
  @JoinColumn({ name: 'course_id'})
  course: CourseEntity 

}
