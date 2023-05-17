import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const {
      username,
      nickname,
      email,
      password,
      phone,
      biography,
      image,
      role,
    } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      username: username,
      nickname: nickname,
      email: email,
      password: hashedPassword,
      phone: phone,
      biography: biography,
      image: image,
      role: role,
    });

    const token = this.jwtService.sign({ id: user._id });
    return { token };
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ msg: string; token: string; status: boolean }> {
    const { email, password } = loginDto;

    const users = await this.userModel.find({ email: { $eq: email } });
    const message = { msg: 'Email wrong ', token: '', status: false };

    if (!users) {
      // throw new BadRequestException(HttpStatus.BAD_REQUEST);
      throw new UnauthorizedException('И-мейл хаяг эсвэл нууц үг буруу байна!');
    }

    if (users.length !== 0) {
      const isPasswordMatched = await bcrypt.compare(
        password,
        users[0].password,
      );

      if (!isPasswordMatched) {
        message.msg = 'Нууц үг буруу байна!';
      } else {
        const token = this.jwtService.sign(users[0].toJSON());
        message.msg = 'Successfull Sign in';
        message.token = token;
        message.status = true;
        return message;
      }
    }
    return message;
  }
  //admin dashboard login
  async adminLogin(userDto: User): Promise<{ token: string }> {
    try {
      const { username, password, role } = userDto;

      // console.log('Request irsen: ====> ', loginDto);
      const user = await this.userModel.findOne({ email: username });

      if (!user) {
        // throw new BadRequestException(HttpStatus.BAD_REQUEST);
        throw new UnauthorizedException('И-мейл хаяг  үг буруу байна!');
      }

      const isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) {
        throw new UnauthorizedException(
          'И-мейл хаяг эсвэл aaa нууц үг буруу байна!',
        );
      }

      if (user.role !== role) {
        throw new UnauthorizedException('Та админ эрхгүй байна!');
      } else {
        const token = this.jwtService.sign({
          id: user._id,
          userName: user.username,
        });

        return { token };
      }
    } catch (error) {
      console.log(error);
    }
  }
}
