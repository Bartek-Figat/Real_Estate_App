import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Response } from 'tsoa';
import connect from '../db/db.client';

export interface User {
  useremail: string;
}

export interface UserParams {
  useremail: string;
}

@Route('user')
export class UsersLoginController extends Controller {
  @Post('/login')
  public async getUsers(@Body() requestBody: UserParams): Promise<void> {
    this.setStatus(201); // set return status 201
    const { db } = await connect();
    const result = await db.collection('new_collection').find(requestBody.useremail).toArray();
    console.log(result);
    return result;
  }
}
