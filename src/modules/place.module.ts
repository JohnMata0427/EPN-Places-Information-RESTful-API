import { Module } from "@nestjs/common";
import { PlaceController } from "src/controllers/place.controller";
import { CloudinaryService } from "src/services/cloudinary.service";
import { PlaceService } from "src/services/place.service";
import { PrismaService } from "src/services/prisma.service";

@Module({
  controllers: [PlaceController],
  providers: [PlaceService, PrismaService, CloudinaryService]
})
export class PlaceModule {}