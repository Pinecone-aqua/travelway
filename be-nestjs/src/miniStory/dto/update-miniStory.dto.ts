import { PartialType } from '@nestjs/mapped-types';
import { CreateMiniStoryDto } from './create-miniStory.dto';

export class UpdateMiniStorylDto extends PartialType(CreateMiniStoryDto) {}
