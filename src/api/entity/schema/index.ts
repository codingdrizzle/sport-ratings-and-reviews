import mongoose, { Schema } from 'mongoose';
import { Entity } from '../../../types';

const EntitySchema: Schema<Entity> = new Schema({
    entity: {
        type: String,
        unique: true,
        required: true
    },
}, { timestamps: true }
);

const EntityModel = mongoose.model<Entity>('Entities', EntitySchema);

export { EntityModel };
