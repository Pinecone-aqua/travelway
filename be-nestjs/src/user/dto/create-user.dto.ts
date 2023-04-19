import { IsArray, IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from '../role.enum';

export class CreateUserDto {
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

    @MinLength(8)
    readonly phone: number;

    @IsString()
    readonly biography: string;

    @IsString()
    readonly image: string;

    @IsEnum(Role)
    @IsString()
    readonly role: string;

    @IsArray()
    readonly travel_id: Array<string>;
}
