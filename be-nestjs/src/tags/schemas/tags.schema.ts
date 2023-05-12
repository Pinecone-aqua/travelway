import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tags {
  @Prop({ type: String })
  name: string;
}

export const TagsSchema = SchemaFactory.createForClass(Tags);
