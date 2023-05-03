import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './schemas/story.schema';

@Injectable()
export class StoryService {
  constructor(
    @InjectModel('Story') private readonly storyModel: Model<Story>,
  ) {}

  async findAll(): Promise<Story[]> {
    const result = await this.storyModel.find();
    return result;
  }
  async findOne(id: string): Promise<Story> {
    const result = await this.storyModel.findOne({ _id: id });
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

  async create(newStory: CreateStoryDto) {
    const { title, description, myth, toDo, province } = newStory;

    if (!title && !description && !myth && !toDo && !province) {
      throw new BadRequestException('Аяллын мэдээлэл дутуу байна');
    }
    console.log(newStory);
    const newAsStory = new this.storyModel(newStory);
    const result = await newAsStory.save();
    return result;
  }
}
