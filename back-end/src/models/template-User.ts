import { Schema, model } from 'mongoose';

interface iUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

const userSchema = new Schema<iUser>(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false,
            default: ''
        }
    },
    {
        collection: 'users'
    }
);

const User = model<iUser>('User', userSchema, 'users');

export default User;
