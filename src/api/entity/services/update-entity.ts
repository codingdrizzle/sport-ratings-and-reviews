import { Entity } from "../../../types";
import { EntityModel } from "../schema";

const updateEntity = (id: String, data: Entity): Promise<Entity | null> => EntityModel
.findByIdAndUpdate(id, {$set: {...data}}, {runValidators: true, upsert: true});

export { updateEntity }