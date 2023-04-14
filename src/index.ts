import { AddressInfo } from 'net';
import { connectDB } from './db/connect';
import { app } from './server';
import logger from './utils/logger';

import { dotenv } from './utils/env-activate';
dotenv()

const PORT: number = parseInt(process.env.PORT || '8000', 10);

const listener = app.listen(PORT, () => {
    connectDB();
    if (typeof listener.address() !== 'string') {
        logger.info(`App listening to port http://localhost:${(<AddressInfo>listener.address()).port}`);
    } else {
        logger.info(`App listening to port ${listener.address()}`);
    }
});
