import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
  Request,
  Security,
  Response,
  ValidateError,
} from 'tsoa';

import { Auth } from '../enums/collection.enum';
import { UserParams, ReqUser } from './interface.Controller';
import { UserService } from '../services/userService';
import { ResponseMessage } from '../enums/responseMessage.enum';
import { stringify } from 'querystring';

const service = new UserService();

@Route('users')
export class UsersController extends Controller {
  @Response(400, 'Bad request')
  @SuccessResponse(201, 'User Created')
  @Post('/login')
  public async loginUser(@Body() requestBody: UserParams): Promise<void> {
    this.setStatus(201);
    const { email, password } = requestBody;

    const doc: UserParams = { email, password };

    return await service.createToken(doc);
  }
  @Response(400, 'Bad request')
  @SuccessResponse(200)
  @Security(Auth.SecurityName)
  @Get('/user-info')
  public async userInfo(@Request() request: any): Promise<any> {
    this.setStatus(200);
    const id: ReqUser = request.user;
    return await service.showUser(id);
  }
}

@Route('auth')
@SuccessResponse('201', ResponseMessage.Created)
export class AuthController extends Controller {
  @SuccessResponse('201', ResponseMessage.Created)
  @Post('/register')
  public async createUser(@Body() requestBody: UserParams): Promise<void> {
    const { email, password } = requestBody;
    const doc = {
      email,
      password,
    };
    await service.createUser(doc);
  }
}
