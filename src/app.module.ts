import { Module } from '@nestjs/common';
import { PlaceModule } from './modules/place.module';
import { CloudinaryModule } from './modules/cloudinary.module';

@Module({ imports: [PlaceModule, CloudinaryModule] })
export class AppModule {}
