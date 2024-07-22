import { Module } from '@nestjs/common';
import { ReviewModule } from './modules/review/review.modules';
import typeOrmConfig from 'typeorm.config';

@Module({
  imports: [typeOrmConfig, ReviewModule],
})
export class AppModule {}
