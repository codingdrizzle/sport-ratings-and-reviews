import { getUserIdFromToken } from '../utilities/permissions';
import { Request, Response, NextFunction } from 'express';
import { findUser } from '../api/user/services';
import { User } from '../types';

const adminAccess = async (req: Request, res: Response, next: NextFunction) => {
    const tokenData: void | { code: number; msg: string } = getUserIdFromToken(req.headers['authorization']!);


    const checkUser: User | null = await findUser({ _id: tokenData });
    if (!checkUser) return next({ code: 401, msg: 'Unauthorised. Permission denied' });

    return ['admin'].includes(checkUser.role) ? next() : next({ code: 401, msg: 'Unauthorised. Permission denied' });
};

const generalAccess = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = getUserIdFromToken(req.headers['authorization']!);
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
