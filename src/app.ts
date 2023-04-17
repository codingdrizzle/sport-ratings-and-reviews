import express, { Application, Request, Response, urlencoded, json } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp'
import 'dotenv/config'

import { ErrorHandler, InvalidUrl } from './middlewares/error-handler';
import AppLogger from './core/eventLogger';
const { router } = require('./routes')

let logger = new AppLogger();
const app: Application = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())
app.use(express.text())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencoded({ limit: '10mb', extended: false, parameterLimit: 10000 }));
app.use(json({ limit: '10mb' }));

app.use(cors());

app.use('/api/v1', router)

router.get('/', (res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to Micro Service - API',
        author: 'Awtsyde Ltd',
        website: 'www.awtsyde.com',
    })
})

app.use(ErrorHandler)
app.use(InvalidUrl)

export default app;
