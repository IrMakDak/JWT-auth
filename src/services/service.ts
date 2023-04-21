import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchMethods } from "../helper/requests";
import { Paths, LocalStorageAppeal, IUserStorageObject } from "@/naming";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

let userSubject = new BehaviorSubject<IUserStorageObject | null>(null);
const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
  const userData = localStorage.getItem(LocalStorageAppeal) as string;
  userSubject = new BehaviorSubject(JSON.parse(userData));
}

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  getAll,
};

function login(username: string, password: string) {
  return fetchMethods
    .post(`${baseUrl}${Paths.AUTHENTICATE}`, { username, password })
    .then((user: IUserStorageObject) => {
      userSubject.next(user);
      localStorage.setItem(LocalStorageAppeal, JSON.stringify(user));
      Router.push(Paths.AUTH);
      return user;
    });
}

function logout() {
  localStorage.removeItem(LocalStorageAppeal);
  userSubject.next(null);
  Router.push(Paths.LOGIN);
}

function getAll() {
  return fetchMethods.get(baseUrl);
}
