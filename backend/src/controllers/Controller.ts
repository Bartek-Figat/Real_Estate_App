import { Body, Controller, Get, Post, Route, Security, SuccessResponse, Request } from 'tsoa';
import { Method } from '../services/authService/userService';

export interface UserParams {
  email: string;
  password: string;
}

@Route('users')
export class UsersController extends Controller {
  @SuccessResponse('201', 'Created')
  @Post()
  public async loginUser(@Body() requestBody: UserParams): Promise<void> {
    this.setStatus(201);
    const { email, password } = requestBody;
    const doc: {
      email: string;
      password: string;
    } = { email, password };
    await Method.findOne(doc);
    return;
  }
}
