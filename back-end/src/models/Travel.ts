import mongoose, { Document, Schema } from 'mongoose';

export interface ITravel {
    title: string;
}

export interface ITravelModel extends ITravel, Document {}

const TravelSchema: Schema = new Schema(
    {
        title: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ITravelModel>('Travels', TravelSchema);
