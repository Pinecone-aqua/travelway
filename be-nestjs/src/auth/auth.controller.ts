import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import * as dotenv from 'dotenv';
import { Response } from 'express';
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

  // @Get('login')
  // async getLogin(@Query('token') token: string, @Res() res: Response) {
  //   const user = this.jwtService.decode(token);
  //   const result = await this.authService.getLogin(user);

  //   if (result.status) {
  //     res.status(200).send(result);
  //   } else {
  //     res.status(203).send(result);
  //   }
  // }

  @Post('login')
  login(
    @Body() loginData: LoginDto,
  ): Promise<{ msg: string; token: string; status: boolean }> {
    return this.authService.login(loginData);
  }
}
