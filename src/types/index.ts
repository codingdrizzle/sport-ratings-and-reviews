import mongoose, { Document, Types } from 'mongoose';

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
    _id: mongoose.Schema.Types.ObjectId;
    entity_type: EntityTypes;
}
export interface Entity extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    entity_type: mongoose.Schema.Types.ObjectId;
    entity: mongoose.Schema.Types.ObjectId;
}

export interface Review extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    userId: mongoose.Schema.Types.ObjectId;
    entityId: mongoose.Schema.Types.ObjectId;
    rating: number | null;
    comment: string | null;
}

//Enumarators
export enum UserRole {
    admin = 'admin',
    user = 'user',
}

export type EntityTypes =
    | 'blogPost'
    | 'facility'
    | 'game'
    | 'player'
    | 'tournament';