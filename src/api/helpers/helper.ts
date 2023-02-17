import { Request } from 'express';

const rateLimit = require('express-rate-limit');

export const rateLimiter = (max: number) =>
    rateLimit({
        max,
        windowMs: 60 * 60 * 1000,
        message: 'Too many requests! Please try again in one hour time',
    });


export interface CustomRequest extends Request {
    user: { [unit: string]: any };
}

export const corsOptions = {
    origin: true,

    credentials: true,

    allowHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
        'Authorization',
    ],

    exposedHeaders: ['Content-Range', 'X-Content-Range', 'Set-Cookie'],
};
