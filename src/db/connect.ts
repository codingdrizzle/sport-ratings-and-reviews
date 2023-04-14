import mongoose from 'mongoose';

import { ConnectOptions } from 'mongoose';
import logger from '../utils/logger';
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const url: string = process.env.MONGO_URI || '';

const connectDB = (): Promise<void> => {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
        .then(() => {
            logger.info('Mongoose connected successfully!');
        })
        .catch((error) => {
            logger.error( error);
            throw new Error('Sorry, we could not connect to the database at the moment');
        });
};

export { connectDB };
