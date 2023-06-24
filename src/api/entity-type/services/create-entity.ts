import { EntityType } from '../../../types';
import { EntityTypeModel } from '../schema';

const createType = (data: EntityType): Promise<EntityType> =>
  EntityTypeModel.create(data);

export { createType };
