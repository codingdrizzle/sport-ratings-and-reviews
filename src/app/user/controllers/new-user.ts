import { Request, Response, NextFunction } from "express";
import { CustomError, User } from "../../../types";
import logger from "../../../utils/logger";
import { hashPassword } from "../../../utils/password-actions";
import { NewResourceCreated } from "../../../utils/responses";
import { createUser } from "../services/create-user";

const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User = await createUser(req.body)
        return NewResourceCreated(res, user)
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);
            next(error);
        } else {
            const customError: CustomError = { code: 500, message: 'An unknown error occurred', };
            next(customError);
        }

    }
}

export { createNewUser }