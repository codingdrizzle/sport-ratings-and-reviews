import mongoose, { Schema } from 'mongoose';
import { Entity } from '../../../types';

const EntitySchema: Schema<Entity> = new Schema(
    {
        entity_type: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        entity: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

const EntityModel = mongoose.model<Entity>('Entities', EntitySchema);

export { EntityModel };
