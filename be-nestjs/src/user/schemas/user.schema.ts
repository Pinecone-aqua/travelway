import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Travel } from 'src/travels/schemas/travel.schema';
import { Role } from '../role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  username: string;

  @Prop()
  nickname: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone: number;

  @Prop()
  biography: string;

  @Prop()
  image: string;

  @Prop()
  role: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Travel' }] })
  travel_id: Travel[];
}

export const UserSchema = SchemaFactory.createForClass(User);
