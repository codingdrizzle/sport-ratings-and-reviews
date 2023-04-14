import { Response } from "express";

export const NewResourceCreated = (expressResponse: Response, data: any) : Response => expressResponse.status(201).json({ code: 201, data: data, message: 'Successfully created' })

export const ResourceAlreadyExists = (expressResponse: Response):Response => expressResponse.status(409).json({code: 409, message: 'Resource already exists'})

export const ResourceNotFound = (expressResponse: Response): Response => expressResponse.status(409).json({code: 409, message: 'Resource not found'})