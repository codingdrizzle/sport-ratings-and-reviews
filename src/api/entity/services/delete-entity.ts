import { Entity } from '../../../types';
import { EntityModel } from '../schema';

const deleteEntity = (id: string): Promise<Entity | null> =>
  EntityModel.findByIdAndDelete(id);

export { deleteEntity };
