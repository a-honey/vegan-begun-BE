import { Food } from './food.entity';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
