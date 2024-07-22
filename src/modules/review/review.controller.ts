import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Review } from './review.entity';
import { ReviewService } from './review.service';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  @ApiOperation({ summary: '모든 리뷰 가져오기 API' })
  @ApiResponse({ status: 200, description: 'Return all reviews.' })
  findAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 리뷰 가져오기 API' })
  @ApiResponse({ status: 200, description: 'Return review.' })
  findOne(@Param('id') id: string): Promise<Review | null> {
    return this.reviewService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: '제품 리뷰 추가 API' })
  @ApiResponse({
    status: 201,
    description: 'The review has been successfully created.',
  })
  update(
    @Param('id') id: string,
    @Body() review: Partial<Review>,
  ): Promise<Review | null> {
    return this.reviewService.update(+id, review);
  }

  @Delete(':id')
  @ApiOperation({ summary: '제품 리뷰 삭제 API' })
  @ApiResponse({
    status: 200,
    description: 'The review has been successfully deleted.',
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.reviewService.remove(+id);
  }
}
