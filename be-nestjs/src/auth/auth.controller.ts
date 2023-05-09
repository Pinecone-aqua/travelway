import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/user/schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ token: string; userid: string }> {
    return this.authService.login(loginDto);
  }
  @Post('loginHandler')
  adminLogin(@Body() userDto: User): Promise<{ token: string }> {
    console.log(userDto);
    return this.authService.adminLogin(userDto);
  }
}
