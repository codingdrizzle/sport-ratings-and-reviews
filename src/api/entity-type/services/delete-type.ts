import { EntityType } from '../../../types';
import { EntityTypeModel } from '../schema';

const deleteType = (id: string): Promise<EntityType | null> =>
  EntityTypeModel.findByIdAndDelete(id);

export { deleteType };
