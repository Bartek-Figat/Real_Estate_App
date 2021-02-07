import { Request } from 'express';
import { Auth } from '../enums/collection.enum';
import { auth } from './authFunction';

export const expressAuthentication = async (
  req: Request,
  securityName: string,
  scopes?: string[]
) => {
  switch (securityName) {
    case Auth.SecurityName:
      return auth(req);
  }
};
