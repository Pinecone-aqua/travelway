import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Зөв И-мейл хаяг оруулна уу' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
