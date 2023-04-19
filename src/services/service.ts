import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchMethods } from "../helper/requests";
import { Paths, LocalStorageAppeal, IUserStorageObject } from "@/naming";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

let userSubject = new BehaviorSubject<IUserStorageObject | null>(null);
const ISSERVER = typeof window === "undefined";
// console.log(ISSERVER);
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
      console.log("USER =", user);
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem(LocalStorageAppeal, JSON.stringify(user));

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
