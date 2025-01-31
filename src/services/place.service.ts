import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Place, UpdatePlace } from 'src/interfaces/place.interface';
import { SearchPlace } from 'src/interfaces/search-place.interface';

@Injectable()
export class PlaceService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPlaces(): Promise<SearchPlace[]> {
    return await this.prisma.place.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        id: 'asc',
      }
    });
  }

  async getPlaceById(id: number): Promise<Place | null> {
    return await this.prisma.place.findUnique({ where: { id } });
  }

  async createPlace(data: Place): Promise<Place> {
    return await this.prisma.place.create({ data });
  }

  async updatePlaceById(id: number, data: UpdatePlace): Promise<UpdatePlace> {
    return await this.prisma.place.update({ where: { id }, data });
  }

  async deletePlaceById(id: number): Promise<Place> {
    return await this.prisma.place.delete({ where: { id } });
  }
}
