import mongoose, { Document, Types, Schema } from 'mongoose';

//Types
export type CustomError = {
    code: number;
    message: string;
};

//Interfaces
export interface User extends Document {
    _id: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface EntityType extends Document {
    _id?: mongoose.Schema.Types.ObjectId;
    entity_type: string;
}
export interface Entity extends Document {
    _id?: Types.ObjectId;
    entity_type: Types.ObjectId;
    entity: Types.ObjectId;
}

export interface Review extends Document {
    _id: Types.ObjectId;
    reviewer: Types.ObjectId;
    entity: Types.ObjectId;
    event: Types.ObjectId;
    rating: number | null;
    comment: string | null;
}

export interface Event extends Document{
    _id: Types.ObjectId;
    name: string;
    sport: string;
    event_date: Date;
    event_venue: string;
    participants: Types.ObjectId[];
    reviews: Types.ObjectId[];
}

//Enumarators
export enum UserRole {
    admin = 'admin',
    user = 'user',
}

//export enum EntityTypes {
//    blogPost = 'blogPost',
//    facility = 'facility',
//    game = 'game',
//    player = 'player',
//    tournament = 'tournament'
//}