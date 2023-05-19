import { IsString } from 'class-validator';

export class CreateMiniStoryDto {
  @IsString()
  readonly image: string;
  @IsString()
  readonly title: string;
  @IsString()
  readonly sentence: string;
  @IsString()
  readonly userId: string;
}
