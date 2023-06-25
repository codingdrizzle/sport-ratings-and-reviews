import mongoose, { Schema } from 'mongoose';
import { Entity } from '../../../types';

const EntitySchema: Schema<Entity> = new Schema(
    {
        entity_type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'EntityType',
            required: true,
        },
        entity: {
            type: mongoose.Schema.Types.ObjectId,
            unique: true,
            required: true,
        },
    },
    { timestamps: true }
);

// Virtual field for Users
EntitySchema.virtual('user', {
    ref: 'User',
    localField: 'entity',
    foreignField: '_id',
    justOne: true,
});

// Apply virtuals
EntitySchema.set('toObject', { virtuals: true });
EntitySchema.set('toJSON', { virtuals: true });

const EntityModel = mongoose.model<Entity>('Entity', EntitySchema);

export { EntityModel };
