import mongoose, { Document, Types, Schema } from 'mongoose';

//Types
export type CustomError = {
    code: number;
    message: string;
};

//Interfaces
export interface User  {
    _id?: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role: string;
}

export interface Entity {
    _id?: Types.ObjectId;
    entity: string;
}

export interface Review  {
    _id?: Types.ObjectId;
    eventId: Types.ObjectId;
    entityId: Types.ObjectId;
    revieweeId: Types.ObjectId;
    reviewerId: Types.ObjectId;
    rating: number | null;
    comment: string | null;
}

export interface Event {
    _id: Types.ObjectId;
    name: string;
    sport: string;
    event_date: Date;
    event_venue: string;
    participants: Types.ObjectId[];
    reviews: Types.ObjectId[];
}



//export enum EntityTypes {
//    blogPost = 'blogPost',
//    facility = 'facility',
//    game = 'game',
//    player = 'player',
//    tournament = 'tournament'
//}