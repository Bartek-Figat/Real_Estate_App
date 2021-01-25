import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { ErrorMessage } from "../../enums/errorMessage.enum";
import { User } from "../../models/user";

import { UserRepository } from "../../repositories/userRepository";

export class UserService {
  private userRepository: UserRepository = new UserRepository()

  public async createUser(password: string, email: string): Promise<void> {
    const user: User = new User(email, password);
    const existingUser: User | undefined = await this.userRepository.findOne(user)

    if(existingUser) {
      throw new Error(ErrorMessage.UserAlredyExists);
    }
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)
    await this.userRepository.saveUser(user)
  }
}