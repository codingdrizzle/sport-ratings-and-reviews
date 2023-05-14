import { getUserIdFromToken } from '../utilities/permissions';
import { Request, Response, NextFunction } from 'express';
import { findUser } from '../api/user/services';
import { User } from '../types';
import ApiResponse from '../utilities/api-responses';

const adminAccess = async (req: Request, res: Response, next: NextFunction) => {
    const tokenData: void | { code: number; msg: string } = getUserIdFromToken(req.headers['authorization']!);


    const checkUser: User | null = await findUser({ _id: tokenData });
    if (!checkUser) return next({ code: 401, msg: 'Unauthorised. Permission denied' });

    return ['admin'].includes(checkUser.role) ? next() : next({ code: 401, msg: 'Unauthorised. Permission denied' });
};


type JWTExpired = {
    code: number;
    message: string;
}


const generalAccess = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers['authorization']) return ApiResponse.errorResponse(res, 'No request authorization', 'Provided request authorization')
        const userId = getUserIdFromToken(req.headers['authorization']);
        if (typeof (userId) !== 'string') return ApiResponse.errorResponse(res, 'Token expired', 'Token expired')
        const currentUser: User | null = await findUser({ _id: userId });

        if (!currentUser) return next({ code: 401, msg: 'Unauthorised. Permission denied' });
        return ['admin', 'user'].includes(currentUser.role) ? next() : next({ code: 401, msg: 'Unauthorised. Permission denied' });
    } catch (error: any) {
        const error_message = error.message
        const match = error_message.match(/msg: '(.+?)'/)
        match ? match[1] : null;

        return res.status(401).json({ message: match })
    }

};

export { adminAccess, generalAccess };
