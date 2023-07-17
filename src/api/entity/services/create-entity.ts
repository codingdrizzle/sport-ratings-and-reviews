import { Entity } from '../../../types';
import { EntityModel } from '../schema';

const createEntity = (data: Entity): Promise<Entity> => {

    console.log('data',data)
    return EntityModel.create({...data});
}
    
export { createEntity };
