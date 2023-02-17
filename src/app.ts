import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import cors from 'cors';

import { errorController as globalErrorHandler } from './api/error';
import HELPERS from './api/helpers';

//routers
import routers from './api/routes';

const xss = require('xss-clean');
//helpers

const {corsOptions } = HELPERS;

const corsSetup = cors(corsOptions);

const app = express();

app.options('*', corsSetup);

app.use(express.json({ limit: '10kb' }));

app.use(express.urlencoded({ extended: true, limit: '10kb' }));


app.use(
    hpp({
        whitelist: [],
    })
);

app.use(mongoSanitize());

app.use(xss());

app.use(cors(corsOptions));

// FEATURE ROUTERS
app.use('/api/v1', routers);

app.use(globalErrorHandler);

export default app;
