import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";

import {PropertyService} from '../services/propertyService/propertyService'

export interface PropertyCreationParams {
    title: string;
    price: number;
    location: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
}

import {ResponseMessage} from '../enums/responseMessage.enum'

@Route("/property")
@SuccessResponse('201', ResponseMessage.Created)
export class PropertyController extends Controller {
    @Post('/add-property')
    public async createProperty(@Body() requestBody: PropertyCreationParams):Promise<void> {
        console.log('working')
    }
}