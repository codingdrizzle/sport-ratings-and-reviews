import { Entity } from "../../../types";
import { EntityModel } from "../schema";

const createEntity = (data: Entity): Promise<Entity> => EntityModel.create(data);

export { createEntity }