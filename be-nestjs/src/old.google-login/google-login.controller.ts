import { Controller, Get, Query, Response as Res } from '@nestjs/common';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { GoogleLoginService } from './google.service';

dotenv.config();

@Controller()
export class GoogleLoginController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly googleService: GoogleLoginService,
  ) {}

  @Get('google-login')
  getGoogle() {
    return this.googleService.googleLogin();
  }

  @Get('google/callback')
  async getGoogleCallback(@Query('code') code: string, @Res() res: Response) {
    const user = await this.googleService.verifyGoogle(code);

    if (user.error) {
      return 'error';
    }

    const result = await this.googleService.getUserInfo(user);

    if (result && result[0].email == user.email) {
      const token = this.jwtService.sign(result[0].toJSON());
      res
        .status(200)
        .cookie('token', token)
        .redirect(
          `${process.env.DOMAIN}://${process.env.HOST}:${process.env.CLIENT_PORT}`,
        );
    }
  }
}

// @Get('google/callback')
// async verifyGoogle(@Req() req: Request, @Res() res: Response) {
//   const { code } = req.query;

//   if (!code) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

//   const accessToken = await getAccessTokenFromCode(code);
//   if (!accessToken)
//     throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

//   const profile: any = await getGoogleUserInfo(accessToken);
//   console.log(profile);

//   let user = await this.userService.findByEmail(profile.email);

//   try {
//     if (!user) {
//       const userInput: User = {
//         email: profile.email,
//         username: profile.name,
//         phone: null,
//         biography: null,
//         image: null,
//         nickname: null,
//         password: null,
//         role: 'user',
//       };
//       user = await this.userService.create(userInput);
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   const payload = { name: user.username, email: user.email };
//   const token = this.jwtService.sign(payload);
//   res
//     .status(200)
//     .cookie('token', token)
//     .redirect(`http://localhost:${process.env.CLIENT_PORT}`);
// }
