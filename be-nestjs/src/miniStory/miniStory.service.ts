import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MiniStory } from './schemas/miniStory.schema';
import { CreateMiniStoryDto } from './dto/create-miniStory.dto';
import { UpdateMiniStorylDto } from './dto/update-miniStory.dto';

@Injectable()
export class MiniStoryService {
  constructor(
    @InjectModel('miniStory') private readonly miniStoryModel: Model<MiniStory>,
  ) {}

  async create(createMiniStoryDto: CreateMiniStoryDto): Promise<MiniStory> {
    const { title, image, sentence } = createMiniStoryDto;
    console.log(title, sentence);

    if (!(title && image && sentence)) {
      throw new BadRequestException('MiniStory мэдээлэл дутуу байна');
    }

    const newMiniStory = new this.miniStoryModel(createMiniStoryDto);
    const result = await newMiniStory.save();
    return result;
  }

  async findAll(): Promise<MiniStory[]> {
    const result = await this.miniStoryModel.find();
    return result;
  }

  async findOne(id: string): Promise<MiniStory> {
    try {
      const result = await this.miniStoryModel.findOne({
        _id: new mongoose.Types.ObjectId(id),
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async update(
    id: string,
    updateTravelDto: UpdateMiniStorylDto,
  ): Promise<MiniStory> {
    const updatedtravels = await this.miniStoryModel.findOneAndUpdate(
      { _id: id },
      updateTravelDto,
      { new: true },
    );

    if (!updatedtravels) {
      throw new BadRequestException(
        `Аяллын мэдээлэл дундаас ${id} ID-тай аялал олдсонгүй`,
      );
    }
    return updatedtravels;
  }

  async remove(id: string): Promise<MiniStory> {
    const deletedTravels = await this.miniStoryModel.findByIdAndRemove({
      _id: id,
    });

    if (!deletedTravels) {
      throw new NotFoundException(`Аяллын ${id} ID-тай аялал олдсонгүй`);
    }
    return deletedTravels;
  }

  // sharavaaa ym nemlee
  async findMinstory(id: string): Promise<MiniStory[]> {
    const result = await this.miniStoryModel.find({ userId: id });
    return result;
  }
}
