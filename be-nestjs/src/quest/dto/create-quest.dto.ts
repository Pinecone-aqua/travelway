import { IsString } from 'class-validator';

export class CreateQuestDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;
  @IsString()
  readonly image: string;
}
