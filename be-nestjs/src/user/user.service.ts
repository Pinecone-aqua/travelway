import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User, UpdateUserDto } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(user: User) {
    const newUser = new this.userModel(user);
    const result = await newUser.save();
    return result;
  }

  async findAll(): Promise<User[]> {
    const result = await this.userModel.find({});
    return result;
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async findOne(id: string): Promise<User> {
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

  async remove(id: string): Promise<User> {
    const deletedUserLocal = await this.userModel.findByIdAndRemove({
      _id: id,
    });

    if (!deletedUserLocal) {
      throw new NotFoundException(`Хэрэглэгч ${id} ID-тай олдсонгүй`);
    }
    return deletedUserLocal;
  }
}
