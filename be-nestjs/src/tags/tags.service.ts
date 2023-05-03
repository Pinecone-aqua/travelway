import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tags } from './schemas/tags.schema';
import { CreateTagsDto } from './dto/create-tags.dto';
import { UpdateTagsDto } from './dto/update-tags.dto';

@Injectable()
export class TagsService {
  constructor(@InjectModel('Tags') private readonly tagsModel: Model<Tags>) {}

  async create(createTagsDto: CreateTagsDto): Promise<Tags> {
    const { name } = createTagsDto;

    if (!name) {
      throw new BadRequestException('Хоосон байна');
    }

    const newTagss = new this.tagsModel(createTagsDto);
    const result = await newTagss.save();
    return result;
  }

  async findAll(): Promise<Tags[]> {
    const result = await this.tagsModel.find();
    return result;
  }

  async findOne(id: string): Promise<Tags> {
    const result = await this.tagsModel.findOne({ _id: id });

    return result;
  }

  // Yalalt commented here, argument new: true is to return updated tag document
  async update(id: string, updateTagsDto: UpdateTagsDto): Promise<Tags> {
    const updatedTagNames = await this.tagsModel.findOneAndUpdate(
      { _id: id },
      updateTagsDto,
      { new: true },
    );

    if (!updatedTagNames) {
      throw new BadRequestException(`ID Хоосон байна олдсонгүй`);
    }
    return updatedTagNames;
  }

  async remove(id: string): Promise<Tags> {
    const deleteTag = await this.tagsModel.findByIdAndRemove({ _id: id });

    if (!deleteTag) {
      throw new NotFoundException(`ID Хоосон байна олдсонгүй`);
    }
    return deleteTag;
  }
}
