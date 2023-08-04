export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IUserDetails {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
