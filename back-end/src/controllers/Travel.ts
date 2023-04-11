import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Travel from '../models/Travel';

const createTravel = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    const travel = new Travel({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return travel
        .save()
        .then((travel) => res.status(201).json({ travel }))
        .catch((error) => res.status(500).json({ error }));
};

const readTravel = (req: Request, res: Response, next: NextFunction) => {
    const travelId = req.params.travelId;

    return Travel.findById(travelId)
        .then((travel) => (travel ? res.status(200).json({ travel }) : res.status(404).json({ message: 'Not found by id' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllTravel = (req: Request, res: Response, next: NextFunction) => {
    return Travel.find()
        .then((travels) => res.status(200).json({ travels }))
        .catch((error) => res.status(500).json({ error }));
};

const updateTravel = (req: Request, res: Response, next: NextFunction) => {
    const travelId = req.params.travelId;

    return Travel.findById(travelId).then((travel) => {
        if (travel) {
            travel.set(req.body);

            return travel
                .save()
                .then((travel) => res.status(201).json({ travel }))
                .catch((error) => res.status(500).json({ error }));
        } else {
            res.status(404).json({ message: 'Not found by id' });
        }
    });
};

const deleteTravel = (req: Request, res: Response, next: NextFunction) => {
    const travelId = req.params.travelId;

    return Travel.findByIdAndDelete(travelId)
        .then((travel) => (travel ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createTravel, readTravel, readAllTravel, updateTravel, deleteTravel };
