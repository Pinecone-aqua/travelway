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
  cloudinary: any;
  constructor(
    @InjectModel('miniStory') private readonly miniStoryModel: Model<MiniStory>,
  ) {}

  async create(createMiniStoryDto: CreateMiniStoryDto): Promise<MiniStory> {
    const { title, image, sentence, userId } = createMiniStoryDto;

    if (!(title && image && sentence && userId)) {
      throw new BadRequestException('MiniStory мэдээлэл дутуу байна');
    }

    const newMiniStory = new this.miniStoryModel(createMiniStoryDto);
    const result = await newMiniStory.save();
    return result;
  }

  async addOneImageToCld(file: any): Promise<any> {
    const { secure_url } = await this.cloudinary.uploadImage(file);
    return secure_url;
  }

  async uploadImageToCloudinary(
    images: Express.Multer.File[],
  ): Promise<string[]> {
    const arr = [];
    await Promise.all(
      images?.map(async (file) => {
        const { secure_url } = await this.cloudinary.uploadImage(file);
        return arr.push(secure_url);
      }),
    );
    return arr;
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

      console.log('huselt orj irlee');
      console.log(result);
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
  async findAllId(): Promise<any> {
    const result = await this.miniStoryModel.find({}).select({ id: 1 });
    return result;
  }
}
