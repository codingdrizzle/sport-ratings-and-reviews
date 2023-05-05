import { accessToken } from '../utilities/permissions';
import { Request, Response, NextFunction } from 'express';
import { findUser } from '../api/user/services';
import { User } from '../types';

const adminAccess = async (req: Request, res: Response, next: NextFunction) => {
    const tokenData: void | { code: number; msg: string } = accessToken(
        req.headers['authorization']
    );
    if (!tokenData) {
        return next({ code: 401, msg: 'Unauthorised. Permission denied' });
    }
    const checkUser: User | null = await findUser({ _id: tokenData });
    if (!checkUser)
        return next({ code: 401, msg: 'Unauthorised. Permission denied' });

    return ['admin'].includes(checkUser.role)
        ? next()
        : next({ code: 401, msg: 'Unauthorised. Permission denied' });
};

const generalAccess = async (req: Request, res: Response, next: NextFunction) => {
    const tokenData: void | { code: number; msg: string } = accessToken(
        req.headers['authorization']
    );
    if (!tokenData) {
        return next({ code: 401, msg: 'Unauthorised. Permission denied' });
    }
    const checkUser: User | null = await findUser({ _id: tokenData });
    if (!checkUser)
        return next({ code: 401, msg: 'Unauthorised. Permission denied' });

    return ['admin', 'user'].includes(checkUser.role)
        ? next()
        : next({ code: 401, msg: 'Unauthorised. Permission denied' });
};

export { adminAccess, generalAccess };
