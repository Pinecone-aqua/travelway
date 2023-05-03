import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type miniStoryDocument = HydratedDocument<TravelWay>;

@Schema({
  timestamps: true,
})
export class TravelWay {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  sentence: string;
}

export const TravelWaySchema = SchemaFactory.createForClass(TravelWay);
