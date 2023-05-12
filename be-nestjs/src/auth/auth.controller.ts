import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import * as dotenv from 'dotenv';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schemas/user.schema';
dotenv.config();

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('login')
  login(
    @Body() loginData: LoginDto,
  ): Promise<{ msg: string; token: string; status: boolean }> {
    return this.authService.login(loginData);
  }
  @Post('loginHandler')
  adminLogin(@Body() userDto: User): Promise<{ token: string }> {
    console.log(userDto);
    return this.authService.adminLogin(userDto);
  }
}
