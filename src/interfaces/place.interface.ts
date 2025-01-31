import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class Place {
  @IsNumberString({}, { message: 'El id debe ser un número' })
  @IsNotEmpty({ message: 'El id es requerido' })
  id: number;

  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @IsString({ message: 'La descripción debe ser un texto' })
  @IsNotEmpty({ message: 'La descripción es requerida' })
  description: string;

  @IsNotEmpty({ message: 'Debe haber al menos un dato curioso' })
  funFacts: string[];

  imageUrl: string;
}

export class UpdatePlace {
  name: string;
  
  description: string;

  funFacts: string[];

  imageUrl: string;
}