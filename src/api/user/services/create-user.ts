import { User } from '../../../types';
import { UserModel } from '../schema';

const createUser = (data: User): Promise<User> => UserModel.create(data);

export { createUser };
