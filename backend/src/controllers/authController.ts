import { Body, Controller, Post, Route, SuccessResponse } from 'tsoa';
import { ResponseMessage } from '../enums/responseMessage.enum';

import { UserService } from '../services/authService/userService';

export interface UserCreationParams {
  password: string;
  email: string;
}


@Route('auth')
@SuccessResponse("201", ResponseMessage.Created) 
export class AuthController extends Controller {
  @Post('/register')
  public async createUser(@Body() requestBody: UserCreationParams): Promise<void> {
    console.log('ok')
    new UserService().createUser(requestBody.password, requestBody.email);
  }
}
