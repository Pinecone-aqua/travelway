import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type miniStoryDocument = HydratedDocument<MiniStory>;

@Schema({
  timestamps: true,
})
export class MiniStory {
  @Prop({ type: String })
  image: string;

  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  sentence: string;
  @Prop({ type: String })
  userId: string;
}

export const miniStorySchema = SchemaFactory.createForClass(MiniStory);
