import { Body, Controller, Get, Post, Route, SuccessResponse, Request, Security } from 'tsoa';
import { Method } from '../services/authService/userService';
import { Auth } from '../enums/collection.enum';
import { UserParams, ReqUser, Options } from './interface.Controller';

@Route('users')
export class UsersController extends Controller {
  @SuccessResponse('201', 'User Created')
  @Post()
  public async loginUser(@Body() requestBody: UserParams): Promise<void> {
    this.setStatus(201);
    const { email, password } = requestBody;
    const doc: UserParams = { email, password };
    return await Method.findOne(doc);
  }
  @SuccessResponse('201', 'Auth')
  @Security(Auth.SecurityName)
  @Get('UserInfo')
  public async userInfo(@Request() request: any): Promise<any> {
    this.setStatus(201);
    const id: ReqUser = request.user;
    const options: Options = { projection: { _id: 0, password: 0 } };
    return await Method.showUser(id, options);
  }
}
