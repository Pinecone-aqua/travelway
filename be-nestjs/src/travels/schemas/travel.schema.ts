import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { TrTags } from 'src/trtags/schemas/tags.schema';

export type TravelDocument = HydratedDocument<Travel>;

@Schema({
  timestamps: true,
})
export class Travel {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop([Object])
  day: object[];

  @Prop()
  season: string;
}

export const TravelSchema = SchemaFactory.createForClass(Travel);

// @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TrTags' }] })
// tags_id: TrTags[];
