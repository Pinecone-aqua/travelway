import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateQuestDto } from './dto/update-quest.dto';
import { Quest } from './schemas/quest.schema';

@Injectable()
export class QuestService {
  constructor(
    @InjectModel('Quest') private readonly questModel: Model<Quest>,
  ) {}

  async findAll(): Promise<Quest[]> {
    const result = await this.questModel.find();
    return result;
  }
  async findOne(id: string): Promise<Quest> {
    const result = await this.questModel.findOne({ _id: id });
    return result;
  }
  async remove(id: string): Promise<Quest> {
    const deleteQuest = await this.questModel.findByIdAndRemove({ _id: id });
    if (!deleteQuest) {
      throw new NotFoundException(`олдсонгүй`);
    }
    return deleteQuest;
  }

  async update(id: string, UpdateQuestDto: UpdateQuestDto): Promise<Quest> {
    const updatedQuest = await this.questModel.findOneAndUpdate(
      { _id: id },
      UpdateQuestDto,
      { new: true },
    );
    if (!updatedQuest) {
      throw new BadRequestException(
        `Аяллын мэдээлэл дундаас ${id} ID-тай аялал олдсонгүй`,
      );
    }
    return updatedQuest;
  }
}
