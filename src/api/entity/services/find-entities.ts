import { Entity } from "../../../types"; 
import { EntityModel } from "../schema";

const findEntity = (id: String): Promise<Entity | null> => EntityModel.findById(id);
const findEntities = (): Promise<Entity[] | []> => EntityModel.find();

export { findEntity, findEntities }