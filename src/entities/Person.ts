import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("persons")
export class Person {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  name: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  nickname: string;

  @Column()
  gender: string;

  @Column()
  phone: string;

  @Column()
  adress: string;

  @Column()
  comments: string;

  @Column()
  profile_picture: string;
}
