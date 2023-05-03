import { Request, Response, NextFunction } from "express";
import { CustomError, User } from "../../../types";
import logger from "../../../core/logger";
import ApiResponse from "../../../utilities/api-responses";
import { updateUser } from "../services";

const editUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const modifiedUser: User | null = await updateUser(id, req.body);
        return ApiResponse.successResponseWithData(res, 'User modified successfully', {...modifiedUser});
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

export { editUser };