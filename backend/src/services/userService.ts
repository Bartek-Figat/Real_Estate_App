import { config } from 'dotenv';
import { compare, genSalt, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { ObjectID } from 'mongodb';
import constants from '../config/constants';
import { ApiError } from '../error/ErrorHandler';
import { User } from '../models/user';
import { UserRepository } from '../repositories/userRepository';
import { ProcessEnv } from '../db/dbOptionsType';

config();
const { secret } = process.env as ProcessEnv;

export class UserService {
  private userRepository: UserRepository = new UserRepository();

  public async createUser(doc: any): Promise<any> {
    const { email, password } = doc;

    const existingUser: any = await this.userRepository.findOne({ email });
    if (existingUser) {
      return;
    }

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    const user = User.create({ email, password: hashPassword });
    return await this.userRepository.saveUser(user);
  }

  public async createToken(doc: any): Promise<any> {
    const { email, password } = doc;
    const document: any = await this.userRepository.findOne({ email });
    const match = document && (await compare(password, document.password));
    if (!match) throw new ApiError(constants.errorTypes.notFound);

    return {
      accessToken: sign(
        {
          data: {
            id: new ObjectID(document._id),
          },
        },
        `${secret}`
      ),
    };
  }

  public async showUser(doc: any): Promise<any> {
    const userID: ObjectID = new ObjectID(doc);
    const document: any = await this.userRepository.findOne({ _id: userID });
    if (!document) throw new ApiError(constants.errorTypes.notFound);
    return await document;
  }
}
