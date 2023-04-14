import { Document, Types } from 'mongoose';

//Types
export type CustomError = {
    code: number
    message: string
};

//Interfaces
export interface User extends Document {
    _id: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role: UserRole
}

export interface Entity extends Document {
    _id: Types.ObjectId;
    entity: EntityTypes,
}

export interface Review extends Document {
    _id: Types.ObjectId;
    userId: Types.ObjectId | User;
    entityType: EntityTypes;
    entityId: Types.ObjectId;
    rating: number | null;
    comment: string | null;
}


//Enumarators
export enum UserRole {
    admin = 'admin',
    user = 'user',
}

export enum EntityTypes {
    blogPost = 'blogPost',
    facility = 'facility',
    game = 'game',
    player = 'player',
    tournament = 'tournament',
}