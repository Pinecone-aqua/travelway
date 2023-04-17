import mongoose, { Document, Schema } from 'mongoose';

export type ITags = {
    _id: string;
    title: string;
};

export interface IDestTravel {
    destination: string;
    subDest: string;
    description?: string;
    tags?: Array<ITags>;
    season?: Array<string>;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IDestTravelModel extends IDestTravel, Document {}

// daraa Tags id deer tagsiin ref holbono
const DestTravelSchema: Schema = new Schema(
    {
        destination: { type: String, required: true },
        subDest: { type: String, required: true },
        description: { type: String, required: false },
        tags: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    _id: { type: Schema.Types.ObjectId },
                    title: { type: String }
                },
            },
            required: false,
        },
        season: {
            type: 'array',
            items: {
                type: String
            },
            required: false
        },
        image: { type: String, required: false }
    },
    {
        timestamps: true,
        collection:"destination_travel",
    }
);

export default mongoose.model<IDestTravelModel>('DestTravel', DestTravelSchema, 'destination_travel');
