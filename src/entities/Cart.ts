import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'customer_id',
  })
  customerId: number;

  @Column()
  total: number;

  @Column({
    name: 'date_placed',
  })
  datePlaced: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
