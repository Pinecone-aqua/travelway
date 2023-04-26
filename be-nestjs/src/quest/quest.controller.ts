import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateQuestDto } from './dto/create-quest.dto';
import { UpdateQuestDto } from './dto/update-quest.dto';
import { QuestService } from './quest.service';
import { Quest } from './schemas/quest.schema';
@Controller('quests')
export class QuestsController {
  constructor(private readonly questService: QuestService) {}

  @Get('get')
  findAll(): Promise<Quest[]> {
    return this.questService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Quest> {
    console.log(id);
    return this.questService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Quest> {
    return this.questService.remove(id);
  }
  @Post('create')
  create(@Body() create: CreateQuestDto) {
    return this.questService.create(create);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestDto: UpdateQuestDto,
  ): Promise<Quest> {
    return this.questService.update(id, updateQuestDto);
  }
}
