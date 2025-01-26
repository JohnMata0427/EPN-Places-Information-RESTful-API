import { IsNotEmpty, IsString } from 'class-validator';

export class Place {
  id: number;

  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @IsString({ message: 'La descripción debe ser un texto' })
  @IsNotEmpty({ message: 'La descripción es requerida' })
  description: string;

  @IsString({ message: 'La dirección debe ser un texto' })
  funFacts: string;

  imageUrl: string;
}