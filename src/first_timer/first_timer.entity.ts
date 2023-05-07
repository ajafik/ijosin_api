import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FirstTimer {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: String,
    description: 'First timer Surname',
  })
  @Column()
  surname: string;

  @Column()
  othernames: string;

  @Column('text')
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  date_of_birth_month: string;

  @Column()
  date_of_birth_day: string;

  @Column()
  date_of_birth_year: string;

  @Column()
  age_bracket: string;

  @Column()
  occupation: string;

  @Column()
  office_phone: string;

  @Column()
  office_address: string;

  @Column()
  gender: string;

  @Column()
  marital_status: string;

  @Column()
  spouse_attends_mfm: boolean;

  @Column()
  spouse_mfm_branch: string;

  @Column()
  spouse_church: string;

  @Column()
  spouse_phone: string;

  @Column()
  nationality: string;

  @Column()
  state_of_origin: string;

  @Column()
  lga: string;

  @Column()
  when_joined_mfm: string;

  @Column()
  previous_mfm_branch: string;

  @Column()
  done_foundational_class: boolean;

  @Column()
  foundational_class_when_where: string;

  @Column()
  visited: boolean;

  @Column({ nullable: true })
  number_visited: number;

  @ApiPropertyOptional({
    type: String,
    description: 'This is an optional property',
  })
  @Column()
  groups: string;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;
}
