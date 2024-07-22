import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Food } from './food.entity';
import { FoodService } from './food.service';

@ApiTags('foods')
@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  @ApiOperation({ summary: '음식 제품 추가 API' })
  @ApiResponse({
    status: 201,
    description: 'The food has been successfully created.',
  })
  update(@Body() food: Partial<Food>): Promise<Food | null> {
    return this.foodService.create(food);
  }
}
