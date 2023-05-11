import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsString()
  username: string;

  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Зөв И-мейл хаяг оруулна уу' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsNumber()
  @MinLength(8)
  phone: number;

  @IsString()
  biography: string;

  @IsString()
  image: string;

  @IsString()
  role: string;
}
