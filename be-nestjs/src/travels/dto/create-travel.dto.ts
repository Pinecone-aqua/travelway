import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTravelDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  readonly day: [
    {
      readonly subTitle: string;
      readonly describe: string;
      readonly image: string;
      readonly considerations: string;
      readonly destination: string;
    },
  ];
}
