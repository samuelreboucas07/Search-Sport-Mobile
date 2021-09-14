export enum Warnings {
  ERROR = 'ERROR',
  ATTENTION = 'ATTENTION',
  SUCCESS = 'SUCCESS',
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  self: string;
}
