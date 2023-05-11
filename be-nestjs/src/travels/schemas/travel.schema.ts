import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Day {
  subTitle: string;
  describe: string;
  image: string;
  considerations: string;
  destination: string;
}

export type TravelDocument = Document & {
  title: string;
  description: string;
  day: Day[];
};

@Schema({
  timestamps: true,
})
export class Travel {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [{ type: Object }] })
  day: Day[];
}

export const TravelSchema = SchemaFactory.createForClass(Travel);
