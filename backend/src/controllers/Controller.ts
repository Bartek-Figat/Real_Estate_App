import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Response } from 'tsoa';

export interface User {
  password: string;
  email: string;
}

export interface UserParams {
  password: string;
  email: string;
}

export class UsersService {
  public create(password: string, email: string): User {
    return {
      password,
      email,
    };
  }
}

// new ValidateError(fields: FieldErrors, message: string): ValidateError

@Route('user')
export class UsersLoginController extends Controller {
  @SuccessResponse('201', 'Created') //
  @Post('/login')
  public async createUser(@Body() requestBody: UserParams): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().create(requestBody.password, requestBody.email);
    return;
  }
}
