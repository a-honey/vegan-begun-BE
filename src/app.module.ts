import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ReviewModule } from './modules/review/review.modules';
import typeOrmConfig from 'typeorm.config';

@Module({
  imports: [typeOrmConfig, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
