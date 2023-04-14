import { Request, Response, NextFunction } from "express";
import { findUser } from "../app/user/services/find-user";
import { ResourceAlreadyExists, ResourceNotFound } from "../utils/responses";
export const checkUserExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await findUser(req.body.email);
        if (user) return ResourceAlreadyExists(res)
        else next()

    } catch (error) {
        return next(error)
    }
}

export const checkUserNotExists = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await findUser(req.body.email);
        if (!user) return ResourceNotFound
        else next()

    } catch (error) {
        return next(error)
    }
}