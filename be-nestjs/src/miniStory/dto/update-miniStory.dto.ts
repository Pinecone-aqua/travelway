import { PartialType } from '@nestjs/mapped-types';
import { CreateMiniStoryDto } from './create-miniStory.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMiniStorylDto extends PartialType(CreateMiniStoryDto) {
  @IsString()
  readonly image: string;

  @IsString()
  readonly title: string;
  readonly sentence: string;
  readonly userId?: string;
}
