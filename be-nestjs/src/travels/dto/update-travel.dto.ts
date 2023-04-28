import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelDto } from './create-travel.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTravelDto extends PartialType(CreateTravelDto) {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly day: [
    {
      readonly title: string;
      readonly description: string;
      readonly image: string;
      readonly considerations: string;
      readonly destination: string;
    },
  ];

  @IsString()
  readonly season: string;
}
