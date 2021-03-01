import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { RequestValidationError } from "../erros/request-validation";
import { DatabaseConnectionError } from "../erros/database-connection";

const router = express.Router()


router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Email must me valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 to 20 characters')
], (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }

    // User creation
    console.log('Creating a user...');
    throw new DatabaseConnectionError();

    res.send({});
});

export { router as signupRouter };