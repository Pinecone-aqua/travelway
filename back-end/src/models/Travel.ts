import mongoose, { Document, Schema } from 'mongoose';

export interface ITravel {
    destination: string;
    subDest: string;
    description?: string;
    tags?: string;
    season?: string;
    image?: string;
}

export interface ITravelModel extends ITravel, Document {}

const TravelSchema: Schema = new Schema(
    {
        destination: { type: String, required: true },
        subDest: { type: String, required: true },
        description: { type: String, required: false },
        tags: { type: String, required: false },
        season: { type: String, required: false },
        iamge: { type: String, required: false },
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ITravelModel>('Travels', TravelSchema);
