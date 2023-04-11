import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
    firstname: string;
    lastname?: string;
    email: string;
    phone1: number;
    phone2?: number;
    password: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        phone1: { type: Number, required: true },
        phone2: { type: Number, required: false },
        password: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'users'
    }
);

export default mongoose.model<IUserModel>('User', UserSchema, 'users');
