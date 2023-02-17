import { NextFunction, Request, Response } from 'express';

const errorController = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    return res.status(400).json({
        status: 'fail',
        message: err.message,
    });
};

export default errorController;
