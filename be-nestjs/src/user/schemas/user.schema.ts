import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  username: string;

  @Prop()
  nickname: string;

  @Prop({ unique: [true, 'Хэрэглэгч бүртгэлтэй байна.'] })
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
}

export const UserSchema = SchemaFactory.createForClass(User);

// @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Travel' }] })
// travel_id: Travel[];
