export const contentTypeHeader = {
  "Content-Type": "application/json",
};
export const srcStore = "https://irmakdak.github.io/JWT-auth/public/images";
export const LocalStorageAppeal = "user";
export const CSSActiveClass = " active";
export const ChartTitle = "Users Gained between 2016-2020";

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
  exact?: boolean;
  children: JSX.Element | JSX.Element[];
  className?: string;
}
export interface IRequestBody {
  username: string;
  password: string;
}
export interface IUserNoPassword {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}
export interface IUser extends IUserNoPassword {
  password: string;
}

export interface IUserStorageObject {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  token: string;
}
