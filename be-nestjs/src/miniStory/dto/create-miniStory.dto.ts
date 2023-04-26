import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMiniStoryDto {
  @IsString()
  readonly image: string;

  @IsNotEmpty()
  readonly title: string;
  readonly sentence: string;
}
