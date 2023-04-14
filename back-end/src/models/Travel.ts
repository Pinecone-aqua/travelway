import mongoose, { Document, Schema } from 'mongoose';

export type ITags = {
    _id: string;
    title: string;
};

export interface ITravel {
    destination: string;
    subDest: string;
    description?: string;
    tags?: Array<ITags>;
    season?: Array<string>;
    image?: string;
}

export interface ITravelModel extends ITravel, Document {}

// daraa Tags id deer tagsiin ref holbono
const TravelSchema: Schema = new Schema(
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
        timestamps: true
    }
);

export default mongoose.model<ITravelModel>('Travels', TravelSchema);
