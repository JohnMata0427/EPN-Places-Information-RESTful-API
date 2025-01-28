import { Module } from '@nestjs/common';
import { PlaceModule } from './modules/place.module';
import { CloudinaryModule } from './modules/cloudinary.module';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [PlaceModule, CloudinaryModule],
})
export class AppModule {}
