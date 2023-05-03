import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StoryDocument = HydratedDocument<Story>;

@Schema({
  timestamps: true,
})
export class Story {
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

export const StorySchema = SchemaFactory.createForClass(Story);
