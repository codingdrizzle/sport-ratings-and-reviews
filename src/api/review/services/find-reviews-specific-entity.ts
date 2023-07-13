import { ReviewModel } from '../schema';

const findReviewsForEntity = (review_id: string, entity_id: string) =>
    ReviewModel.find({ _id: review_id, entity: entity_id })
        //.populate({ path: 'reviewer', select: '_id username email' })
        //.populate({ path: 'event', select: '_id name' })
        //.populate({
        //    path: 'entity',
        //    select: '_id entity entity_type',
        //    populate: [
        //        { path: 'entity_type', select: 'entity_type' },
        //        { path: 'user', select: '_id username email' }
        //    ]
        //});

export { findReviewsForEntity };