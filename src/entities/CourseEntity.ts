import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import ClassroomEntity from './ClassroomEntity';
import PeriodEntity from "./PeriodEntity";

@Entity("courses")
export default class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ClassroomEntity, classRoom => classRoom.course, { eager: true})
  classes: ClassroomEntity

  @OneToOne(() => PeriodEntity, period => period.id)
  @JoinColumn({ name: 'period_id' })
  period: PeriodEntity 

  getCourse () {
    return {
      id: this.id,
      name: this.name,
      classes: this.classes
    }
  }

}
