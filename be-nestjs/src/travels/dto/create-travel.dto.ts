import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTravelDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  day: [
    {
      subTitle: string;
      describe: string;
      image: string;
      considerations: string;
      destination: string;
    },
  ];
}
