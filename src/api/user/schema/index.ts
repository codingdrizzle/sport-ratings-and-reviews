import mongoose, { Schema } from 'mongoose';
import { User } from '../../../types';

const UserSchema: Schema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Reviews'
            }
        ]
    },
    { timestamps: true }
);

const UserModel = mongoose.model<User>('User', UserSchema);

export {UserModel};
