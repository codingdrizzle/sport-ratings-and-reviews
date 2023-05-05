import { User } from '../../../types';
import { UserModel } from '../schema';

const deleteUser = (id: string): Promise<User | null> =>
  UserModel.findByIdAndDelete(id);

export { deleteUser };
