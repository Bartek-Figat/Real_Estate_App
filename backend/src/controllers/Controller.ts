import express from 'express';
import {
  Body,
  Controller,
  Get,
  Post,
  Route,
  SuccessResponse,
  Request,
  Header,
  Security,
} from 'tsoa';
import { Method } from '../services/authService/userService';
import { Auth } from '../enums/collection.enum';

export interface UserParams {
  email: string;
  password: string;
}

@Route('users')
export class UsersController extends Controller {
  @SuccessResponse('201', 'User Created')
  @Post()
  public async loginUser(@Body() requestBody: UserParams): Promise<void> {
    this.setStatus(201);
    const { email, password } = requestBody;
    const doc = { email, password };
    return await Method.findOne(doc);
  }
  @SuccessResponse('201', 'Auth')
  @Security(Auth.SecurityName)
  @Get('UserInfo')
  public async userInfo(@Request() request: any): Promise<any> {
    this.setStatus(201);
    console.log(request.user);
  }
}
