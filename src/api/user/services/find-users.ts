import { User } from "../../../types";
import { UserModel } from "../schema";

const findUser = (key: Object): Promise<User | null> => UserModel.findOne({ ...key })
const findUsers = (): Promise<User[] | []> => UserModel.find()

export { findUser, findUsers}