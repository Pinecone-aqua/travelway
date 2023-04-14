import mongoose, { Document, Schema } from 'mongoose';

export interface ITags {
    title: string;
};

export interface ITagsModel extends ITags, Document {}

const TagsSchema: Schema = new Schema(
    {
        title: { 
            type: String, 
            required: true 
        }
    },
    {
        collection: 'tags'
    }
);

export default mongoose.model<ITagsModel>('Tags', TagsSchema, 'tags');
