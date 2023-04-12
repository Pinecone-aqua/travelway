import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';

const createUser = (req: Request, res: Response, next: NextFunction) => {
    const { firstname, lastname, email, phone1, phone2, password } = req.body;

    /**
     * firstname: string;
     * lastname: string;
     * email: string;
     * phone1: number;
     * phone2?: number;
     * password: string;
     */

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstname,
        lastname,
        email,
        phone1,
        phone2,
        password
    });

    /**
     * travels deer travel tags id
     * populate('tags').select('-__v')
     * tags id travels ruu oruulj ireh
     */

    return user
        .save()
        .then((user) => res.status(201).json({ user }))
        .catch((error) => res.status(500).json({ error }));
};

const readUser = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return User.findById(userId)
        .then((user) => (user ? res.status(200).json({ user }) : res.status(404).json({ message: 'Not found by id' })))
        .catch((error) => res.status(500).json({ error }));
};

const readUserByName = (req: Request, res: Response, next: NextFunction) => {
    const { firstname } = req.body;
    
    if(!firstname) return res.status(404).json({ message: "Are you really send username? Name field is empty"});

    return User.findOne({firstname: new RegExp('^'+firstname+'$', 'i')}, function(err:/**type here*/, doc:/** type here */) {

    });
} 

const readAllUsers = (req: Request, res: Response, next: NextFunction) => {
    return User.find()
        .then((users) => res.status(200).json({ users }))
        .catch((error) => res.status(500).json({ error }));
};

const updateUser = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return User.findById(userId).then((user) => {
        if (user) {
            user.set(req.body);

            return user
                .save()
                .then((user) => res.status(201).json({ user }))
                .catch((error) => res.status(500).json({ error }));
        } else {
            res.status(404).json({ message: 'Not found by id' });
        }
    });
};

const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return User.findByIdAndDelete(userId)
        .then((user) => (user ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createUser, readUser, readAllUsers, updateUser, deleteUser };
