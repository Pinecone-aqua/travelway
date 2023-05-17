import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './schemas/story.schema';

@Injectable()
export class StoryService {
  constructor(
    @InjectModel('Story') private readonly storyModel: Model<Story>,
    private readonly CloudinaryService: CloudinaryService,
  ) {}

  async countNum(): Promise<number> {
    const result = await this.storyModel.count();
    return result;
  }

  async findAllId(): Promise<any> {
    const result = await this.storyModel.find({}).select({ id: 1 });
    return result;
  }
  async findMark(): Promise<any> {
    const result = await this.storyModel
      .find({})
      .select({ id: 1, coord: 1 })
      .limit(7);
    return result;
  }
  async findOne(id: string): Promise<Story> {
    const result = await this.storyModel.findOne({ _id: id });
    return result;
  }
  async findPage(pageNum: number): Promise<any> {
    const result = await this.storyModel
      .find({})
      .select({ _id: 1, title: 1, province: 1 })
      .skip((pageNum - 1) * 8)
      .limit(8);
    return result;
  }
  async findUser(userId: string): Promise<Story[]> {
    const result = await this.storyModel.find({ userId: userId });
    return result;
  }
  async remove(id: string): Promise<Story> {
    const deleteStory = await this.storyModel.findByIdAndRemove({ _id: id });
    if (!deleteStory) {
      throw new NotFoundException(`олдсонгүй`);
    }
    return deleteStory;
  }

  async update(id: string, UpdateStoryDto: UpdateStoryDto): Promise<Story> {
    const updatedStory = await this.storyModel.findOneAndUpdate(
      { _id: id },
      UpdateStoryDto,
      { new: true },
    );
    if (!updatedStory) {
      throw new BadRequestException(
        `Аяллын мэдээлэл дундаас ${id} ID-тай аялал олдсонгүй`,
      );
    }

    return updatedStory;
  }

  async uploadImageToCloudinary(
    images: Express.Multer.File[],
  ): Promise<string[]> {
    const arr = [];
    await Promise.all(
      images?.map(async (file) => {
        const { secure_url } = await this.CloudinaryService.uploadImage(file);
        return arr.push(secure_url);
      }),
    );
    return arr;
  }

  async create(newStory: CreateStoryDto) {
    try {
      const { title, description, myth, toDo, province } = newStory;

      if (!title && !description && !myth && !toDo && !province) {
        throw new BadRequestException('Аяллын мэдээлэл дутуу байна');
      }
      console.log(newStory);
      const newAsStory = new this.storyModel(newStory);
      const result = await newAsStory.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
