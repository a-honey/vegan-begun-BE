import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
