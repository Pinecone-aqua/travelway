import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TravelDocument = HydratedDocument<miniStory>;

@Schema({
  timestamps: true,
})
export class miniStory {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const miniStorySchema = SchemaFactory.createForClass(miniStory);

// @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TrTags' }] })
// tags_id: TrTags[];
