import { ReviewModel } from "../review/schema";
import { Types } from "mongoose";

const findAverageRatingForReviewee = async (eventId: Types.ObjectId, entityId: Types.ObjectId, revieweeId: Types.ObjectId) => {
    const averageRating = await ReviewModel.aggregate([
        {
            $match: {
                eventId,
                entityId,
                revieweeId,
            },
        },
        {
            $group: {
                _id: "$revieweeId",
                averageRating: { $avg: "$rating" },
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

    if (averageRating.length > 0) {
        return parseFloat(averageRating[0].averageRating.toFixed(2));
    }

    return null;
};

export { findAverageRatingForReviewee };