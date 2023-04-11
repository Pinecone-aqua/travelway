import { Schema, model } from 'mongoose';

interface iTravel {
    destination: string;
    subDest?: string;
    description?: string;
    tags?: string;
    season?: string;
    image: string;
}

const travelSchema = new Schema<iTravel>(
    {
        destination: {
            type: String,
            required: true
        },
        subDest: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        tags: {
            type: String,
            required: false
        },
        season: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: true
        },
        timestamp
    },
    {
        collection: 'travels'
    }
);

const Travel = model<iTravel>('Travel', travelSchema, 'travels');

export default Travel;
