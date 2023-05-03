import { Entity } from "../../../types";
import { EntityModel } from "../schema";

const deleteEntity = (id: String): Promise<Entity | null> => EntityModel.findByIdAndDelete(id);

export { deleteEntity }