import { IsArray, IsObject, IsString } from 'class-validator';

export class CreateStoryDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;
  @IsString()
  readonly image: string[];
  @IsString()
  readonly myth: string;
  @IsArray()
  readonly toDo: [];
  @IsString()
  readonly province: string;
  @IsString()
  readonly userId: string;
  @IsObject()
  readonly coord: object;
  @IsString()
  readonly category: string;
}
