import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { Review } from './review.entity';
import { ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Review> {
    return this.reviewService.findOne(+id);
  }

  @Post()
  update(
    @Param('id') id: string,
    @Body() review: Partial<Review>,
  ): Promise<Review> {
    return this.reviewService.update(+id, review);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.reviewService.remove(+id);
  }
}
