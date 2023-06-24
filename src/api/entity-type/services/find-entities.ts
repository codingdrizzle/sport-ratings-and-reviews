import { EntityType } from '../../../types';
import { EntityTypeModel } from '../schema';

const findType = (id: string): Promise<EntityType | null> =>
  EntityTypeModel.findById(id);
const findTypes = (): Promise<EntityType[] | []> => EntityTypeModel.find();

export { findType, findTypes };
