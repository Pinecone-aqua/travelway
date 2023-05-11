import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TravelDocument = HydratedDocument<Travel>;

@Schema({
  timestamps: true,
})
export class Travel {
  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Array })
  day: [
    {
      subTitle: string;
      describe: string;
      image: string;
      considerations: string;
      destination: string;
    },
  ];
}

export const TravelSchema = SchemaFactory.createForClass(Travel);
