import { config } from 'dotenv';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import { ProcessEnv } from '../db/dbOptionsType';
import { Auth } from '../enums/collection.enum';

config();
const { secret } = process.env as ProcessEnv;

interface IPayload {
  data: {
    id: string;
  };
}

export const expressAuthentication = async (
  req: Request,
  securityName: string,
  scopes?: string[]
) => {
  if (securityName === Auth.SecurityName) {
    const token: any = req.headers['authorization'];
    if (!token) {
      return new Error('No token provided');
    }
    const accessToken = token.split(' ')[1];
    const user = verify(accessToken, `${secret}`) as IPayload;
    if (!user) {
      return new Error('No accessToken provided');
    }
    return user.data.id;
  }
};
