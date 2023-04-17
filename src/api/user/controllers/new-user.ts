import { Request, Response, NextFunction } from "express";
import { CustomError, User } from "../../../types";
import logger from "../../../core/logger";
import { hashPassword } from "../../../utilities/password-actions";
import apiResponse from "../../../utilities/api-responses";
import { createUser } from "../services/create-user";

const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User = await createUser(req.body)
        return apiResponse.successResponseWithData(res, 'Account created successfully', user)
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