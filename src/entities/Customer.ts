import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'email', nullable: false, unique: true })
  email: string;

  @Column({ name: 'first_name', nullable: true })
  first_name: string;

  @Column({ name: 'last_name', nullable: true })
  last_name: string;

  @Exclude()
  @Column({ nullable: false })
  password: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
