import { Request, Response, NextFunction } from "express";
import {findUser } from "../api/user/services/find-user";
import apiResponse from "../utilities/api-responses";

export const checkUserExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await findUser(req.body.email);
        if (user) return apiResponse.alreadyExistResponse(res, 'User already exists')
        else next()

    } catch (error) {
        return next(error)
    }
}

export const checkUserNotExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await findUser(req.body.email);
        if (!user) return apiResponse.notFoundResponse(res, 'User not found');
        else next()

    } catch (error) {
        return next(error)
    }
}