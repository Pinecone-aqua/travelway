import { IsString } from 'class-validator';

export class CreateMiniStoryDto {
  @IsString()
  image: string;
  @IsString()
  title: string;
  @IsString()
  sentence: string;
  @IsString()
  userId: string;
}
