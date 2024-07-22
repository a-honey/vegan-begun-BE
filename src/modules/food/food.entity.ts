import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '음식 id' })
  id: number;

  @Column()
  @ApiProperty({ description: '제품명' })
  name: string;

  @Column()
  @ApiProperty({ description: '기타 설명' })
  description: string;

  @Column('text')
  @ApiProperty({ description: '태그 목록' })
  tags: string;

  @Column()
  @ApiProperty({ description: '구매 웹사이트 URL' })
  URL: string;

  @Column()
  @ApiProperty({ description: '제품 이미지 URL' })
  imgURL_main: string;

  @Column()
  @ApiProperty({ description: '제품 성분표 URL' })
  imgURL_list: string;
}
