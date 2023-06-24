import mongoose, { Schema } from 'mongoose';
import { EntityType } from '../../../types';

const EntityTypeSchema: Schema<EntityType> = new Schema(
  {
    entity_type: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const EntityTypeModel = mongoose.model<EntityType>('EntityType', EntityTypeSchema);

export { EntityTypeModel };
