import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TrTagsDocument = HydratedDocument<TrTags>;

@Schema()
export class TrTags {
  @Prop()
  name: string;
}

export const TrTagsSchema = SchemaFactory.createForClass(TrTags);
