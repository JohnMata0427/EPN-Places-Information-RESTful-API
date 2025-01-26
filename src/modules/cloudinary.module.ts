import { Module } from '@nestjs/common';
import { CloudinaryProvider } from 'src/providers/cloudinary.provider';
import { CloudinaryService } from 'src/services/cloudinary.service';

@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryProvider, CloudinaryService]
})
export class CloudinaryModule {}
