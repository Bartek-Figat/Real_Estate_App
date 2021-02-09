import { Property } from "../../models/property";
import { PropertyRepository } from "../../repositories/propertyRepository";
import {PropertyCreationParams} from '../../controllers/propertyController'


export class PropertyService {
  private propertyRepository: PropertyRepository = new PropertyRepository()

  public async createProperty({title, price, location, description, bedrooms, bathrooms}: PropertyCreationParams):Promise<void>{
    const property = new Property(title, price, location, description, bedrooms, bathrooms)
    await this.propertyRepository.saveProperty(property)
    console.log('property added')
  }
}