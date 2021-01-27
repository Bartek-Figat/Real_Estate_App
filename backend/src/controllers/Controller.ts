import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Response } from 'tsoa';
import { getDb } from '../db/db.client';
import { Db } from 'mongodb';
import { findOne } from '../db/db.user';

export interface UserParams {
  email: string;
}

//User Interface in src/users/user.ts.
export interface User {
  email: string;
}

//// src/users/usersService.ts
export class UsersService {
  public get(email: string): User {
    return {
      email,
    };
  }
}

//// src/users/usersController.ts
@Route('users')
export class UsersController extends Controller {
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(@Body() requestBody: UserParams): Promise<void> {
    const v = await findOne({ email: requestBody.email });
    console.log(v);
    this.setStatus(201); // set return status 201
    return;
  }
}
