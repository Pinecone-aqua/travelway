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

  // async findAll(): Promise<User[]> {
  //   const result = await this.userModel.find({});
  //   return result;
  // }

  async findProInfo(): Promise<any> {
    try {
      const result = await this.userModel.find({}, { username: 1, image: 1 });
      return result;
    } catch (error) {
      throw new Error(`Error finding user profiles: ${error}`);
    }
  }

  async findByEmail(email: string) {
    try {
      return await this.userModel.findOne({ email });
    } catch (error) {
      throw new Error(`Error finding email address: ${error}`);
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      const result = await this.userModel.findOne({ _id: id });
      return result;
    } catch (error) {
      throw new Error(`Error finding one user: ${error}`);
    }
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
    try {
      const deletedUserLocal = await this.userModel.findOneAndDelete({
        _id: id,
      });
      if (!deletedUserLocal) {
        throw new NotFoundException(`oldsongui`);
      }
      return deletedUserLocal;
    } catch (error) {
      // Handle the error here
      console.error('Error occurred while removing user:', error);
      throw error; // Optionally rethrow the error
    }
  }

  async countNum(): Promise<any> {
    const result = await this.userModel.count();
    return result;
  }
  async findPage(pageNum: number): Promise<any> {
    const result = await this.userModel
      .find({})
      .skip((pageNum - 1) * 8)
      .limit(8);
    return result;
  }
  async findAllId(): Promise<any> {
    const result = await this.userModel.find({}).select({ id: 1 });
    return result;
  }
}
