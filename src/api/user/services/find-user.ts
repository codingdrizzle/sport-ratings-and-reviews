import { User } from "../../../types";
import { UserModel } from "../schema";

const findUser = (key: string): Promise<User | null> => UserModel.findOne({email: key})

export { findUser }