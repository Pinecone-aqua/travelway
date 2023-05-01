import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelDto } from './create-travel.dto';
import { IsString } from 'class-validator';

export class UpdateTravelDto extends PartialType(CreateTravelDto) {
  @IsString()
  readonly _id: string;
}
