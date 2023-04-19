export const contentTypeHeader = {
  "Content-Type": "application/json",
};

export const LocalStorageAppeal = "user";
export const CSSActiveClass = " active";

export enum messages {
  INCORRECT_DATA = "Username or password is incorrect",
  USERNAME_REQUIRED = "Username is required",
  PASSWORD_REQUIRED = "Password is required",
}
export enum RequestMethods {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
}
export enum RouterEvents {
  CHANGESTART = "routeChangeStart",
  CHANGECOMPLETE = "routeChangeComplete",
}
export enum Paths {
  UNAUTHORIZED = "/api/authenticate",
  LOGIN = "/login",
  USERS = "/users",
  AUTHENTICATE = "/authenticate",
  HOME = "/",
  CHARTS = "/charts",
}
export interface IProps {
  href: string;
  exact: boolean;
  children: [];
}
export interface IRequestBody {
  username: string;
  password: string;
}
export interface IUser {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface IUserStorageObject {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  token: string;
}
