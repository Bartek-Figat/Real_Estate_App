import { config } from 'dotenv/types';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ProcessEnv } from '../db/dbOptionsType';
config();
const { secret } = process.env as ProcessEnv;

interface IPayload {
  data: {
    id: string;
  };
}

const protectedRoute = async (req: Request, res: Response, next: NextFunction) => {
  const autToken = req.headers['authorization'];
  if (!autToken) return;
  const accessToken = autToken.split(' ')[1];

  const user = verify(accessToken, `${secret}`) as IPayload;
  if (!user) {
    return;
  }

  req.user = user.data.id;
  next();
};
