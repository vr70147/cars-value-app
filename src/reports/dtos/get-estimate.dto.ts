import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class GetEstimateDto {
  @Transform(({ value }) => value)
  @IsString()
  make: string;

  @Transform(({ value }) => value)
  @IsString()
  model: string;

  @Transform(({ value }) => +value)
  @IsNumber()
  @Min(1955)
  @Max(new Date().getFullYear())
  year: number;

  @Transform(({ value }) => +value)
  @Min(0)
  @Max(450000)
  @IsNumber()
  mileage: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => parseFloat(value))
  @IsLatitude()
  lat: number;
}
