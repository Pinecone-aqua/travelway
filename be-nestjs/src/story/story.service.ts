import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService as cloudinary } from 'src/cloudinary/cloudinary.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './schemas/story.schema';

@Injectable()
export class StoryService {
  constructor(
    @InjectModel('Story') private readonly storyModel: Model<Story>,
    private readonly CloudinaryService: cloudinary,
  ) {}

  async countNum(): Promise<number> {
    const result = await this.storyModel.count();
    return result;
  }

  async findAllId(): Promise<any> {
    const result = await this.storyModel.find({}).select({ id: 1 });
    return result;
  }
  //filter
  // async findMark(query: any): Promise<any> {
  //   const {
  //     category: selectedCategory,
  //     province: selectedProvince,
  //     search: search,
  //   } = query;
  //   console.log(search, selectedProvince, selectedCategory);

  //   if (!(selectedCategory || selectedProvince || search)) {
  //     console.log('1');

  //     const result = await this.storyModel.find({}).select({ id: 1, coord: 1 });
  //     return result;
  //   }
  //   if (selectedCategory) {
  //     const result = await this.storyModel
  //       .find({ category: selectedCategory })
  //       .select({ id: 1, coord: 1 });
  //     return result;
  //   }
  //   if (selectedCategory || selectedProvince || search) {
  //     console.log('2');
  //     const result = await this.storyModel
  //       .find({
  //         category: selectedCategory,
  //         province: selectedProvince,
  //         title: { $regex: new RegExp(search) },
  //       })
  //       .select({ id: 1, coord: 1 });
  //     return result;
  //   }
  //   if (selectedCategory || selectedProvince) {
  //     console.log('3');
  //     const result = await this.storyModel
  //       .find({ category: selectedCategory, province: selectedProvince })
  //       .select({ id: 1, coord: 1 });
  //     return result;
  //   }
  //   if (selectedCategory || search) {
  //     console.log('4');
  //     const result = await this.storyModel
  //       .find({
  //         category: selectedCategory,
  //         title: { $regex: new RegExp(search) },
  //       })
  //       .select({ id: 1, coord: 1 });
  //     return result;
  //   }
  //   if (selectedProvince || search) {
  //     console.log('5');
  //     const result = await this.storyModel
  //       .find({
  //         province: selectedProvince,
  //         title: { $regex: new RegExp(search) },
  //       })
  //       .select({ id: 1, coord: 1 });
  //     return result;
  //   }

  //   if (selectedProvince) {
  //     const result = await this.storyModel
  //       .find({ province: selectedProvince })
  //       .select({ id: 1, coord: 1 });
  //     return result;
  //   }
  //   if (search) {
  //     const result = await this.storyModel
  //       .find({ title: { $regex: new RegExp(search) } })
  //       .select({ id: 1, coord: 1 });
  //     return result;
  //   } else {
  //     console.log('else');

  //     // const result = await this.storyModel
  //     //   .find({ province: selectedProvince, category: selectedCategory })
  //     //   .select({ id: 1, coord: 1 });
  //     // return result;
  //   }
  // }

  async findMark(query: any): Promise<any> {
    const {
      category: selectedCategory,
      province: selectedProvince,
      search: search,
    } = query;

    console.log(search, selectedProvince, selectedCategory);

    if (!(selectedCategory || selectedProvince || search)) {
      console.log('1');
      const result = await this.storyModel
        .find({})
        .select({ id: 1, coord: 1, title: 1 });
      return result;
    } else if (selectedCategory && selectedProvince && search) {
      console.log('2');
      const result = await this.storyModel
        .find({
          category: selectedCategory,
          province: selectedProvince,
          title: { $regex: new RegExp(search, 'i') },
        })
        .select({ id: 1, coord: 1, title: 1 });
      return result;
    } else if (selectedCategory && selectedProvince) {
      const result = await this.storyModel
        .find({ category: selectedCategory, province: selectedProvince })
        .select({ id: 1, coord: 1, title: 1 });
      return result;
    } else if (selectedCategory && search) {
      console.log('4');
      const result = await this.storyModel
        .find({
          category: selectedCategory,
          title: { $regex: new RegExp(search, 'i') },
        })
        .select({ id: 1, coord: 1, title: 1 });
      return result;
    } else if (selectedProvince && search) {
      const result = await this.storyModel
        .find({
          province: selectedProvince,
          title: { $regex: new RegExp(search, 'i') },
        })
        .select({ id: 1, coord: 1, title: 1 });
      return result;
    } else if (selectedCategory) {
      const result = await this.storyModel
        .find({ category: selectedCategory })
        .select({ id: 1, coord: 1, title: 1 });
      return result;
    } else if (selectedProvince) {
      const result = await this.storyModel
        .find({ province: selectedProvince })
        .select({ id: 1, coord: 1, title: 1 });
      return result;
    } else if (search) {
      const result = await this.storyModel
        .find({ title: { $regex: new RegExp(search, 'i') } })
        .select({ id: 1, coord: 1, title: 1 });
      return result;
    } else {
      console.log('else');
      // Handle the case when no conditions are provided
    }
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
    try {
      const arr = [];
      await Promise.all(
        images?.map(async (file) => {
          const { secure_url } = await this.CloudinaryService.uploadImage(file);
          return arr.push(secure_url);
        }),
      );
      return arr;
    } catch (error) {
      throw new BadRequestException('Аяллын зураг дутуу байна');
    }
  }

  async create(newStory: CreateStoryDto) {
    try {
      const {
        title,
        description,
        myth,
        toDo,
        province,
        coord,
        userId,
        category,
      } = newStory;

      if (
        title &&
        description &&
        myth &&
        toDo &&
        province &&
        coord &&
        userId &&
        category
      ) {
        const newAsStory = new this.storyModel(newStory);
        await newAsStory.save();

        return {
          status: 200,
          message: 'Амжилттай хадгалагдлаа',
        };
      } else {
        throw new BadRequestException('Аяллын мэдээлэл дутуу байна');
      }
    } catch (error) {
      throw new BadRequestException('Аяллын мэдээлэл дутуу байна');
    }
  }
}
