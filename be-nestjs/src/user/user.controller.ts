import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { User, UpdateUserDto } from './schemas/user.schema';

@Controller('allUsers')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('/pageNum')
  countNum(): Promise<any> {
    return this.userService.countNum();
  }
  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get('profile')
  findProfile() {
    return this.userService.findProInfo();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(_id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.userService.remove(id);
  }

  @Get('page/:id')
  findPage(@Param('id') pageNum: number): Promise<User> {
    return this.userService.findPage(pageNum);
  }
}
