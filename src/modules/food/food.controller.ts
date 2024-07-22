import { Body, Controller, Post } from '@nestjs/common';

import { Food } from './food.entity';
import { FoodService } from './food.service';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  update(@Body() food: Partial<Food>): Promise<Food | null> {
    return this.foodService.create(food);
  }
}
