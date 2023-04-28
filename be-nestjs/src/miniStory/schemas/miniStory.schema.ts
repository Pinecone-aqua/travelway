import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type miniStoryDocument = HydratedDocument<MiniStory>;

@Schema({
  timestamps: true,
})
export class MiniStory {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  sentence: string;
}

export const miniStorySchema = SchemaFactory.createForClass(MiniStory);
