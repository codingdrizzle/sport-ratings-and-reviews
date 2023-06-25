import { Entity } from '../../../types';
import { EntityModel } from '../schema';

const findEntity = (id: string): Promise<Entity | null> =>
    EntityModel.findById(id)
        .populate({ path: 'entity_type', select: '_id entity_type' })
        .populate({ path: 'user', select: '_id username email', strictPopulate: false })

const findEntities = (): Promise<Entity[] | []> =>
    EntityModel.find()
        .populate({ path: 'user', select: '_id username email', strictPopulate: false })

export { findEntity, findEntities };
