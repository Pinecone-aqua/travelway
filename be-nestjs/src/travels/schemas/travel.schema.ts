import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TravelDocument = HydratedDocument<Travel>;

@Schema({
  timestamps: true,
})
export class Travel {
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
