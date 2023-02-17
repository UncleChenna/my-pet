/* eslint-disable no-unused-vars */

import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config({ path: './src/api/config/config.env' });

import CONFIG from './api/config';

const {
    config: { ENV, database },
} = CONFIG;

// connecting to database

const DB_PROD = database.DB!
const PORT = ENV.PORT;

const DB_DEV = database.LOCAL;

const DATABASE = ENV.NODE_ENV === 'development' ? DB_DEV : DB_PROD;

mongoose
    .connect(DATABASE!)
    .then(() => {
        console.log('✅✅✅ ➡ DATABASE CONNECTED');
    })
    .catch((err: Error) => {
        // log to console
        err.message += " Incorrect/Invalid Database string or Invalid Mongoose options."
        
        console.log('error', err.message);
        console.log(err);
    });

// importing express app
import app from './app';

//listening to app
const server = app.listen(PORT, async () => {
    console.log(
        `LISTENING http://127.0.0.1:${PORT}/api/v1 ON PORT ${PORT}`
    );
});
module.exports = server;
