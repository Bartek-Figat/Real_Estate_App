export interface UserParams {
  email: string;
  password: string;
}

export interface ReqUser {
  request: {
    user: string;
  };
}

export interface Options {
  projection: {
    _id: number;
    password: number;
  };
}