import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import queryString from 'query-string';
import { getAccessTokenFromCode } from './getAccessTokenFromCode';

@Injectable()
export class GoogleLoginService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async googleLogin() {
    const stringifiedParams = queryString.stringify({
      client_id: process.env.CLIENT_ID,
      redirect_uri: `http://localhost:${process.env.PORT}/google/callback`,
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ].join(' '),
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent',
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
  }

  // This is add user function and to check Schema
  async getUserInfo(user) {
    try {
      const findEmail = await this.userModel
        .find({ email: user.email })
        .limit(1);

      console.log(findEmail.length != 1, findEmail.length);
      if (findEmail.length != 1) {
        const userInput: User = {
          email: user.email,
          username: user.name,
          phone: null,
          biography: null,
          image: user.picture,
          nickname: null,
          password: null,
          role: 'user',
        };

        const result = await this.userModel.insertMany(userInput);

        return result;
      } else {
        return findEmail;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getLogin(user) {
    const result = await this.userModel.find({ email: { $eq: user.email } });
    const message = { data: 'email wrong ', token: '', status: false };
    if (result.length != 0) {
      const passwordCheck = await bcrypt.compare(
        user.password,
        result[0].password,
      );
      if (passwordCheck) {
        const token = this.jwtService.sign(result[0].toJSON());
        message.data = 'success sign in';
        message.token = token;
        message.status = true;
        return message;
      }
      message.data = 'password wrong';
    }

    return message;
  }

  async verifyGoogle(code) {
    const access_token: any = await getAccessTokenFromCode(code);
    const user = await getGoogleUserInfo(access_token);

    return user;

    async function getGoogleUserInfo(access_token: string) {
      const data = await fetch(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      ).then((res) => res.json());

      return data;
    }
  }
}
