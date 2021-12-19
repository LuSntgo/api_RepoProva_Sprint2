import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, OneToOne, JoinColumn } from "typeorm";
import ClassRoomEntity from './ClassroomEntity';
import CategoryEntity from './CategoryEntity';

@Entity("exams")
export default class ExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  created_at: Date;

  @ManyToMany(() => ClassRoomEntity, classRoom => classRoom.id, { eager: true })
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
  classes: ClassRoomEntity[]

  @OneToOne(() => CategoryEntity, category => category.id, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  getExam () {
      return {
          id: this.id,
          url: this.url,
          category: this.category?.name,
          classes: this.classes.map(c => ({
            prof: c.professor.name,  
            year: c.year,
            semester: c.semester
          }))
      }
  }
  
}
