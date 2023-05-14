import { ReviewModel } from "../schema";
import mongoose from "mongoose";

const findUserRatings = async (userId: mongoose.Types.ObjectId) => {
    const userRatings = await ReviewModel.aggregate([
        {
            $match: {
                reviewer: userId,
            },
        },
        //{
        //    $lookup: {
        //        from: 'Entities',
        //        localField: 'entityId',
        //        foreignField: '_id',
        //        as: 'entity',
        //    },
        //},
        //{
        //    $unwind: '$entity',
        //},
        {
            $project: {
                _id: 0,
                //entity: '$entity.entity',
                rating: 1,
                comment: 1,
            },
        },
    ]);
    return userRatings;
};

export { findUserRatings }