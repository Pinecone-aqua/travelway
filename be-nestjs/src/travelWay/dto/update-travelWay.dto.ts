import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelWayDto } from './create-travelWay.dto';
import { IsString } from 'class-validator';

export class UpdateTravelWayDto extends PartialType(CreateTravelWayDto) {
  @IsString()
  readonly image: string;

  @IsString()
  readonly title: string;
  readonly sentence: string;
}
