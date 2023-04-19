import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { username, nickname, email, password } = createUserDto;

    if (!username && !nickname && !email && !password) {
      throw new BadRequestException(
        'User email and password and, username required',
      );
    }

    const newUser = new this.userModel(createUserDto);
    const result = await newUser.save();
    return result;
  }

  async findAll(): Promise<any> {
    const result = await this.userModel.find();
    return result;
  }

  async findOne(id: string) {
    const result = await this.userModel.findOne({ _id: id });

    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUserLocal = await this.userModel.findOneAndUpdate(
      { _id: id },
      updateUserDto,
      { new: true },
    );

    if (!updatedUserLocal) {
      throw new BadRequestException(
        `Хэрэглэгчийн ${id} ID-тай хэрэглэгч олдсонгүй`,
      );
    }
    return updatedUserLocal;
  }

  async remove(id: string): Promise<string> {
    const deletedUserLocal = await this.userModel.findByIdAndRemove(id);

    if (!deletedUserLocal) {
      throw new NotFoundException(`Хэрэглэгч ${id} ID-тай олдсонгүй`);
    }
    return 'success';
  }
}
