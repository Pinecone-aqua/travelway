import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Response, Request } from 'express';
import Logging from '../library/Logging';
import { ITags } from '../models/Tags';
import { ITravel, ITravelModel } from '../models/Travel';
import { IUser } from '../models/User';

export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({ error });
        }
    };
};

/** VALIDATE */
export const Schemas = {
    tags: {
        create: Joi.object<ITags>({
            title: Joi.string().required()
        }),
        update: Joi.object<ITags>({
            title: Joi.string().required()
        })
    },
    user: {
        create: Joi.object<IUser>({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().required(),
            phone1: Joi.string().required(),
            phone2: Joi.string().required(),
            password: Joi.string().required()
        }),
        update: Joi.object<IUser>({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().required(),
            phone1: Joi.string().required(),
            phone2: Joi.string().required(),
            password: Joi.string().required()
        })
    },
    travel: {
        create: Joi.object<ITravel>({
            title: Joi.string().required()
        }),
        update: Joi.object<ITravel>({
            title: Joi.string().required()
        })
    }
};

/** author: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required(), */
