import { Body, Controller, Post, Route, SuccessResponse } from 'tsoa';

import { Method } from '../services/authService/userService';

export interface UserParams {
  email: string;
  password: string;
}

@Route('users')
export class UsersController extends Controller {
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async loginUser(@Body() requestBody: UserParams): Promise<void> {
    this.setStatus(201);
    const { email, password } = requestBody;
    const doc = { email, password };
    const res = await Method.findOne(doc);
    console.log(res);
    return;
  }
}
