import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  username: string;

  @Prop()
  nickname: string;

  @Prop({ unique: [true, 'Хэрэглэгч бүртгэлтэй байна.'] })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  phone: number;

  @Prop()
  biography: string;

  @Prop()
  image: string;

  @Prop({ default: 'user' })
  role: 'user' | 'admin' | 'moderator';
}

export class UpdateUserDto extends User {
  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
