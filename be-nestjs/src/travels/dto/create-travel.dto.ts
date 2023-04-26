import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTravelDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly day: [
    {
      readonly title: string;
      readonly description: string;
      readonly image: string;
      readonly considerations: string;
      readonly destination: string;
    },
  ];

  @IsString()
  readonly season: string;

  @IsString()
  readonly tags_id: string;
}
