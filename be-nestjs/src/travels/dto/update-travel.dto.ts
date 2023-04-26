import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelDto } from './create-travel.dto';
import { isObjectIdOrHexString } from 'mongoose';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTravelDto extends PartialType(CreateTravelDto) {
  @IsNotEmpty()
  readonly _id: string;

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

  @IsString()
  readonly tags_id: string;
}
