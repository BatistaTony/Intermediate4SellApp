export interface IUser {
  id: string;
  avatar: string;
  name: string;
}

export interface IPost {
  id: string;
  owner: IUser;
  category: string;
  date: Date;
  text: string;
  gallery: Array<string>;
  interestings: number;
}
