import { config } from './config/config';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Logging from './library/Logging';
import travelRouter from './routes/TravelRouter';
import userRouter from './routes/UserRouter';
import tagRouter from './routes/TagsRouter';

const router = express();

/** Connect to mongo */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Connected to MongoDB');
        StartServer();
    })
    .catch((error) => {
        Logging.error('Холбогдох боломжгүй байна.');
        Logging.error(error);
    });

/** Only start server IF Mongo connect */
const StartServer = () => {
    router.use((req, res, next) => {
        /** Log the request */
        Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log Response */
            Logging.info(`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        });
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    /** Rules of API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    router.use('/authors', travelRouter);
    router.use('/users', userRouter);
    router.use('/tags', tagRouter);

    /** Check Health */
    router.get('/ping', (req, res, next) => res.status(200).json({ message: 'successfull connected' }));

    /** Error handle */
    router.use((req, res, next) => {
        const error = new Error('not found');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}.`));
};
