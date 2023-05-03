import { Request, Response, NextFunction } from "express";
import { CustomError, User } from "../../../types";
import logger from "../../../core/logger";
import ApiResponse from "../../../utilities/api-responses";
import { deleteUser } from "../services";

const removeUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User | null = await deleteUser(req.body);
        return ApiResponse.successResponse(res, 'User removed successfully');
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

export { removeUser };