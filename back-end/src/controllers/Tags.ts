import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Tags from '../models/Tags';

const createTag = (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body;

    const tagName = new Tags({
        _id: new mongoose.Types.ObjectId(),
        title
    });

    return tagName
        .save()
        .then((tagName) => res.status(201).json({ tagName }))
        .catch((error) => res.status(500).json({ error }));
};

const readTag = (req: Request, res: Response, next: NextFunction) => {
    const tagId = req.params.tagId;

    return Tags.findById(tagId)
        .then((tag) => (tag ? res.status(200).json({ tag }) : res.status(404).json({ message: 'Not found by id' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllTags = (req: Request, res: Response, next: NextFunction) => {
    return Tags.find()
        .then((tags) => res.status(200).json({ tags }))
        .catch((error) => res.status(500).json({ error }));
};

const updateTag = (req: Request, res: Response, next: NextFunction) => {
    const tagId = req.params.tagId;

    return Tags.findById(tagId).then((tagName) => {
        if (tagName) {
            tagName.set(req.body);

            return tagName
                .save()
                .then((tagName) => res.status(201).json({ tagName }))
                .catch((error) => res.status(500).json({ error }));
        } else {
            res.status(404).json({ message: 'Not found by id' });
        }
    });
};

const deleteTag = (req: Request, res: Response, next: NextFunction) => {
    const tagId = req.params.tagId;

    return Tags.findByIdAndDelete(tagId)
        .then((tagName) => (tagName ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createTag, readTag, readAllTags, updateTag, deleteTag };
