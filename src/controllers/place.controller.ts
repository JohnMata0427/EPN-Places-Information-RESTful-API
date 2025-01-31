import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Place as PlaceModel } from "@prisma/client";
import { Response } from "express";
import { Place, UpdatePlace as UpdatePlaceModel } from "src/interfaces/place.interface";
import { SearchPlace } from "src/interfaces/search-place.interface";
import { PlaceService } from "src/services/place.service";
import { CloudinaryService } from "src/services/cloudinary.service";
import { FileInterceptor } from "@nestjs/platform-express";

const { OK, CREATED, BAD_REQUEST, NOT_FOUND } = HttpStatus;
const NotFoundResponse = { statusCode: NOT_FOUND, message: "No se encontró el edificio" };
const BadRequestResponse = { statusCode: BAD_REQUEST, message: "Asegurese de enviar una imagen y que el nombre del lugar no esté repetido e intente nuevamente" };

@Controller("places")
export class PlaceController {
  constructor(private readonly placeService: PlaceService, private readonly cloudinary: CloudinaryService) {}

  @Get()
  async getAllPlaces(@Res() response: Response): Promise<void> {
    const places: SearchPlace[] = await this.placeService.getAllPlaces();
    response.status(OK).json(places);
  }

  @Get(":id")
  async getPlaceById(@Res() response: Response, @Param("id", ParseIntPipe) id: number): Promise<void> {
    const place: PlaceModel | null = await this.placeService.getPlaceById(id);
    response.status(place ? OK : NOT_FOUND).json(place ?? NotFoundResponse);
  }

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  async createPlace(@Res() response: Response, @Body() body: Place, @UploadedFile() image: Express.Multer.File): Promise<void> {
    try {
      const cloudinaryResponse = await this.cloudinary.uploadFile(image);
      body.imageUrl = cloudinaryResponse.secure_url;
      body.id = Number(body.id);
      const place: PlaceModel = await this.placeService.createPlace(body);
      response.status(CREATED).json(place);
    } catch (error) {
      response.status(BAD_REQUEST).json(BadRequestResponse);
      console.log(error)
    }
  }

  @Put(":id")
  @UseInterceptors(FileInterceptor("image"))
  async updatePlaceById(@Res() response: Response, @Param("id", ParseIntPipe) id: number, @Body() body: UpdatePlaceModel, @UploadedFile() image: Express.Multer.File): Promise<void> {
    try {
      if (image) {
        const cloudinaryResponse = await this.cloudinary.uploadFile(image);
        body.imageUrl = cloudinaryResponse.secure_url;
      }

      const place: UpdatePlaceModel = await this.placeService.updatePlaceById(id, body);
      response.status(place ? OK : NOT_FOUND).json(place ?? NotFoundResponse);
    } catch {}
  }

  @Delete(":id")
  async deletePlaceById(@Res() response: Response, @Param("id", ParseIntPipe) id: number): Promise<void> {
    const place: PlaceModel = await this.placeService.deletePlaceById(id);
    response.status(place ? OK : NOT_FOUND).json(place ?? NotFoundResponse);
  }

}