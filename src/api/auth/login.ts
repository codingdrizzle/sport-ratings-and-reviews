import { Request, Response, NextFunction } from "express";
import ApiResponses from "../../utilities/api-responses";
import { comparePassword } from "../../utilities/password-actions";
import { generateToken } from "../../utilities/permissions";


const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if (!password) return ApiResponses.errorResponse(res, 'Cannot process request due to undefined password', 'No password provided');

        const isPasswordMatch = await comparePassword(password, req.hashedpassword);

        const loggedInResponse: object = {
            logged_in_as: email,
            access_token: generateToken({ id: req.id, email, password: req.hashedpassword }),
            logged_in_at: new Date(Date.now())
        }

        if (isPasswordMatch && req.isValidEmail) return ApiResponses.successResponseWithData(res, 'Login successful', loggedInResponse);
        else return ApiResponses.errorResponse(res, 'Login unsuccessful', 'Email or password incorrect');

    } catch (error) {
        
        return next(error);
    }
}

export { login };