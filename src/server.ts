import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ErrorHandler, InvalidUrl } from './middlewares/error-handler';
const { router } = require('./routes')

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', router)


app.use(ErrorHandler)
app.use(InvalidUrl)

export { app }
