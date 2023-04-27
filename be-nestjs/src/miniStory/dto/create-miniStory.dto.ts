import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMiniStoryDto {
  @IsString()
  readonly image: string;
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  readonly sentence: string;
}
