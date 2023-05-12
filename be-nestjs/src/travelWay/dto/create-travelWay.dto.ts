import { IsString } from 'class-validator';

export class CreateTravelWayDto {
  @IsString()
  readonly image: string;
  @IsString()
  readonly title: string;
  readonly sentence: string;
}
