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
} from 'tsoa';
import { UserService } from '../services/authService/userService';
import { Auth } from '../enums/collection.enum';
import { UserParams, ReqUser, Options } from './interface.Controller';

const { findOne, showUser } = UserService;

@Route('users')
export class UsersController extends Controller {
  @Response(400, 'Bad request')
  @SuccessResponse(201, 'User Created')
  @Post()
  public async loginUser(@Body() requestBody: UserParams): Promise<void> {
    this.setStatus(201);
    const { email, password } = requestBody;
    const doc: UserParams = { email, password };
    return await findOne(doc);
  }
  @Response(400, 'Bad request')
  @SuccessResponse(200)
  @Security(Auth.SecurityName)
  @Get('UserInfo')
  public async userInfo(@Request() request: any): Promise<any> {
    this.setStatus(200);
    const id: ReqUser = request.user;
    const options: Options = { projection: { _id: 0, password: 0 } };
    return await showUser(id, options);
  }
}
