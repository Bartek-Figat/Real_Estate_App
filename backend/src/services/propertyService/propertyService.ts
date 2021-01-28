import { Property } from "../../models/property";

import {PropertyCreationParams} from '../../controllers/propertyController'

export class PropertyService {
  public create(propertyCreationParams: PropertyCreationParams): Property {
    return {
        ...propertyCreationParams
    }
  }
}