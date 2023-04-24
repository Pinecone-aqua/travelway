import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TravelDocument = HydratedDocument<Travel>;

@Schema({
  timestamps: true,
})
export class Travel {
  @Prop({ type: mongoose.Types.ObjectId })
  _id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop([])
  day: [];

  @Prop()
  season: string;

  @Prop()
  tags_id: string;
}

export const TravelSchema = SchemaFactory.createForClass(Travel);

// @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TrTags' }] })
// tags_id: TrTags[];
