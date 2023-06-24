import { EntityType } from '../../../types';
import { EntityTypeModel } from '../schema';

const updateType = (id: string, data: EntityType): Promise<EntityType | null> =>
  EntityTypeModel.findByIdAndUpdate(
    id,
    { $set: { ...data } },
    { runValidators: true, upsert: true }
  );

export { updateType };
