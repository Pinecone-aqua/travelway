import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateTagsDto } from './create-tags.dto';

export class UpdateTagsDto extends PartialType(CreateTagsDto) {
  @IsNotEmpty()
  _id: string;
}
