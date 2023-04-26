import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsString()
  readonly nickname: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Зөв И-мейл хаяг оруулна уу' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsNumber()
  @MinLength(8)
  readonly phone: number;

  @IsString()
  readonly biography: string;

  @IsString()
  readonly image: string;

  @IsString()
  readonly role: string;
}
