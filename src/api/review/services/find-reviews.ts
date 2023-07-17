import { Types } from 'mongoose';
import { ReviewModel } from '../schema';

const findReviews = () => ReviewModel.find()
    .populate({ path: 'eventId', select: 'name' })
    .populate({ path: 'entityId', select: 'entity' })
    .populate({ path: 'revieweeId', select: '-_id -createdAt -updatedAt -__v' })
    .populate({ path: 'reviewerId', select: 'username' });

const findReviewsForEvent = (eventId: Types.ObjectId) => ReviewModel.find({ eventId })
    .populate({ path: 'eventId', select: 'name' })
    .populate({ path: 'entityId', select: 'entity' })
    .populate({ path: 'revieweeId', select: '-_id -createdAt -updatedAt -__v' })
    .populate({ path: 'reviewerId', select: 'username' });

const findReviewsUnique = (reviewId: Types.ObjectId) => ReviewModel.findOne({ _id: reviewId })
    .populate({ path: 'eventId', select: 'name' })
    .populate({ path: 'entityId', select: 'entity' })
    .populate({ path: 'revieweeId', select: '-_id -createdAt -updatedAt -__v' })
    .populate({ path: 'reviewerId', select: 'username' });

const findReviewsForEventByEntity = (eventId: Types.ObjectId, entityId: Types.ObjectId) => ReviewModel.find({ eventId, entityId })
    .populate({ path: 'eventId', select: 'name' })
    .populate({ path: 'entityId', select: 'entity' })
    .populate({ path: 'revieweeId', select: '-_id -createdAt -updatedAt -__v' })
    .populate({ path: 'reviewerId', select: 'username' });

const findReviewsForEventByEntityReviewee = (eventId: Types.ObjectId, entityId: Types.ObjectId, revieweeId: Types.ObjectId) => ReviewModel.find({ eventId, entityId, revieweeId })
    .populate({ path: 'eventId', select: 'name' })
    .populate({ path: 'entityId', select: 'entity' })
    .populate({ path: 'revieweeId', select: '-_id -createdAt -updatedAt -__v' })
    .populate({ path: 'reviewerId', select: 'username' });

export { findReviews, findReviewsForEvent, findReviewsForEventByEntity, findReviewsUnique, findReviewsForEventByEntityReviewee };