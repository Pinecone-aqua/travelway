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
  toDo: [];
  @Prop()
  province: string;
}

export const QuestSchema = SchemaFactory.createForClass(Quest);
