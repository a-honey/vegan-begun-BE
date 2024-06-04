import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviwDto {
  @IsNumber()
  id: number;

  @IsNumber()
  userId: number;

  @IsString()
  @Min(1)
  @Max(10)
  title: string;

  @IsString()
  content: string;
}
