import { User } from '../../../types';
import { UserModel } from '../schema';

const updateUser = (id: string, data: object): Promise<User | null> =>
  UserModel.findOneAndUpdate(
    { _id: id },
    { $set: { ...data } },
    { runValidators: true, upsert: true }
  );

export { updateUser };
