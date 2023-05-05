import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FirstTimer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  surname: string;

  @Column()
  othernames: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
