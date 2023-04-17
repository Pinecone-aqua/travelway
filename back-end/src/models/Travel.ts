import mongoose, { Document, Schema } from 'mongoose';

export interface PlanType {
    title: string;
    description: string;
    image: string;
    considerations: string;
}

export interface ITravel {
    title: string;
    description: string;
    plan: Array<PlanType>;
    createdAt: Date;
    updatedAt: Date;
}

export interface ITravelModel extends ITravel, Document {}

// daraa Tags id deer tagsiin ref holbono
const TravelSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: false },
        plan: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    title: { type: String, required: true },
                    description: { type: String, required: true },
                    image: { type: String, required: false },
                    considerations: { type: String, required: false }
                }
            }
        }
    },
    {
        timestamps: true,
        collection: 'travels'
    }
);

export default mongoose.model<ITravelModel>('Travel', TravelSchema, 'travels');
