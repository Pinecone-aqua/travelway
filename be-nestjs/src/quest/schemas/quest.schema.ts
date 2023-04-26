import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestDocument = HydratedDocument<Quest>;

@Schema({
  timestamps: true,
})
export class Quest {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  image: string;
  @Prop()
  myth: string;
  @Prop()
  toDoList: [];
}

export const QuestSchema = SchemaFactory.createForClass(Quest);
