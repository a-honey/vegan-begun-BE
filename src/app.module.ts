import { FoodModule } from './modules/food/food.modules';
import { Module } from '@nestjs/common';
import { ReviewModule } from './modules/review/review.modules';
import typeOrmConfig from '../typeorm.config';

@Module({
  imports: [typeOrmConfig, FoodModule, ReviewModule],
})
export class AppModule {}
