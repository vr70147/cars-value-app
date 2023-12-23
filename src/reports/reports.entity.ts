import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Reports {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;
}
