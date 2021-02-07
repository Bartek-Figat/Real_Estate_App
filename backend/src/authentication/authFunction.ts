import { config } from 'dotenv';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import constants from '../config/constants';
import { ProcessEnv } from '../db/dbOptionsType';
import { ApiError } from '../error/ErrorHandler';

config();
const { secret } = process.env as ProcessEnv;

export const auth = async (req: Request) => {
  const token: any = req.headers['authorization'];
  if (!token) throw new ApiError(constants.errorTypes.auth);

  const accessToken = token.split(' ')[1];
  return verify(accessToken, `${secret}`, (err: any, decode: any) => {
    if (err) throw new ApiError(constants.errorTypes.auth);

    return decode.data.id;
  });
};
