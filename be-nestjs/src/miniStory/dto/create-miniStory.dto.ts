import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMiniStoryDto {
  @IsString()
  readonly image: string;
  @IsString()
  readonly title: string;
  readonly sentence: string;
  readonly userId: string;
}
