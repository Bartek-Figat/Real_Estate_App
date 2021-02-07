interface UsertType {
  email: string;
  password: string;
}

class User {
  static create({ email, password }: UsertType) {
    return {
      email,
      password,
    };
  }
}

export { User };
