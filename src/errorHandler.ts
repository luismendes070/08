// ChatGPT
import { Request, Response, NextFunction } from 'express';

// Middleware for error handling
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack); // Log do erro

    // Set the response status
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
}
