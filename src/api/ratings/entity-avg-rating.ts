import { ReviewModel } from "../review/schema";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

async function getEntityAverageRating(entityId: string): Promise<number> {
    const result = await ReviewModel.aggregate([
        { $match: { entityId: new ObjectId(entityId) } },
        {
            $group: {
                _id: '$entityId',
                averageRating: { $avg: '$rating' },
            },
        },
        {
            $replaceRoot: {
                newRoot: '$$ROOT'
            }
        },
        {
            $project: {
                averageRating: 1,
                _id: 0
            }
        }
    ]);

    return parseFloat(result[0].averageRating.toFixed(1));
}


export {getEntityAverageRating}


