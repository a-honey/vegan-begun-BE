import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('text')
  tags: string;

  @Column()
  URL: string;

  @Column()
  imgURL_main: string;

  @Column()
  imgURL_list: string;
}
