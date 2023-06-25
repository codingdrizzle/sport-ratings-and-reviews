import { EntityType } from '../../../types';
import { EntityTypeModel } from '../schema';

const updateType = (id: string, data: EntityType): Promise<EntityType | null> =>
  EntityTypeModel.findByIdAndUpdate(
    id,
    { $set: { entity_type: data } },
    { runValidators: true, new: true }
  );

export { updateType };
