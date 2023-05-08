import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TravelWay } from './schemas/miniStory.schema';
import { CreateTravelWayDto } from './dto/create-travelWay.dto';
import { UpdateTravelWayDto } from './dto/update-travelWay.dto';

@Injectable()
export class TravelWayService {
  constructor(
    @InjectModel('TravelWay') private readonly travelWayModel: Model<TravelWay>,
  ) {}

  async create(createTravelwayDto: CreateTravelWayDto): Promise<TravelWay> {
    const { title, sentence } = createTravelwayDto;

    if (!(title && sentence)) {
      throw new BadRequestException('TravelWay мэдээлэл дутуу байна');
    }

    const newTravelWay = new this.travelWayModel(createTravelwayDto);
    const result = await newTravelWay.save();
    // console.log('result  shuu:', result);

    return result;
  }

  async findAll(): Promise<TravelWay[]> {
    const result = await this.travelWayModel.find();
    console.log(result);
    return result;
  }

  async findOne(id: string): Promise<TravelWay> {
    try {
      const result = await this.travelWayModel.findOne({
        _id: new mongoose.Types.ObjectId(id),
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async update(
    id: string,
    updateTravelDto: UpdateTravelWayDto,
  ): Promise<TravelWay> {
    const updatedtravels = await this.travelWayModel.findOneAndUpdate(
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

  async remove(id: string): Promise<TravelWay> {
    const deletedTravels = await this.travelWayModel.findByIdAndRemove({
      _id: id,
    });

    if (!deletedTravels) {
      throw new NotFoundException(`Аяллын ${id} ID-тай аялал олдсонгүй`);
    }
    return deletedTravels;
  }
}
