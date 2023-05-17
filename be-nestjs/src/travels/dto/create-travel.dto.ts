import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTravelDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  userId: string;

  image: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => DayDto)
  day: DayDto[];
}

export class DayDto {
  @IsString()
  subTitle: string;
  
  @IsString()
  describe: string;
  
  image: string;
  
  @IsString()
  considerations: string;

  @IsString()
  destination: string;
}
