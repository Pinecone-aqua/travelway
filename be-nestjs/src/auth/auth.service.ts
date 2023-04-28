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

  async login(loginDto: LoginDto): Promise<{ token: string; userid: string }> {
    const { email, password } = loginDto;

    // console.log('Request irsen: ====> ', loginDto);

    const user = await this.userModel.findOne({ email: email });

    if (!user) {
      // throw new BadRequestException(HttpStatus.BAD_REQUEST);
      throw new UnauthorizedException('И-мейл хаяг эсвэл нууц үг буруу байна!');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    // console.log('iS Password Matched');
    // console.log(isPasswordMatched);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('И-мейл хаяг эсвэл нууц үг буруу байна!');
    }

    const token = this.jwtService.sign({ id: user._id });

    return { token, userid: JSON.stringify(user._id) };
  }
}
