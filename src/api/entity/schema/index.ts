import mongoose, { Schema } from 'mongoose';
import { Entity } from '../../../types';

const EntitySchema: Schema<Entity> = new Schema(
    {
        entity: {
            type: String,
            unique: true,
            //enum: ['participant', 'facility', 'club', 'location'],
            //default: 'participant',
            required: true,
        }
    },
    { timestamps: true }
);

const EntityModel = mongoose.model<Entity>('Entity', EntitySchema);

export { EntityModel };
