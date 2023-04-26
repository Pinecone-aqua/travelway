import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { miniStory } from './schemas/miniStory.schema';
import { CreateMiniStoryDto } from './dto/create-miniStory.dto';
import { UpdateMiniStorylDto } from './dto/update-miniStory.dto';

@Injectable()
export class MiniStoryService {
  constructor(
    @InjectModel('miniStory') private readonly miniStoryModel: Model<miniStory>,
  ) {}

  async create(createTravelDto: CreateMiniStoryDto): Promise<miniStory> {
    const { title, image, sentence } = createTravelDto;

    if (!(title && image && sentence)) {
      throw new BadRequestException('MiniStory мэдээлэл дутуу байна');
    }

    const newTravel = new this.miniStoryModel(createTravelDto);
    const result = await newTravel.save();
    return result;
  }

  async findAll(): Promise<miniStory[]> {
    const result = await this.miniStoryModel.find();
    return result;
  }

  // async findIdAll(): Promise<any[]> {
  //   const result = await this.travelModel.find({}, { _id: 1 });
  //   return result;
  // }

  async findOne(id: string): Promise<miniStory> {
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
  ): Promise<miniStory> {
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

  async remove(id: string): Promise<miniStory> {
    const deletedTravels = await this.miniStoryModel.findByIdAndRemove({
      _id: id,
    });

    if (!deletedTravels) {
      throw new NotFoundException(`Аяллын ${id} ID-тай аялал олдсонгүй`);
    }
    return deletedTravels;
  }
}
