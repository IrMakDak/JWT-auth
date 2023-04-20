import getConfig from "next/config";
import { userService } from "../services/service";
import { RequestMethods, contentTypeHeader, IRequestBody } from "./../naming";

const { publicRuntimeConfig } = getConfig();

function get(url: string) {
  const requestOptions: RequestInit = {
    method: RequestMethods.GET,
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url: string, body: IRequestBody) {
  const requestOptions: RequestInit = {
    method: RequestMethods.POST,
    headers: { ...contentTypeHeader, ...authHeader(url) },
    credentials: "include",
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url: string, body: IRequestBody) {
  const requestOptions: RequestInit = {
    method: RequestMethods.PUT,
    headers: { ...contentTypeHeader, ...authHeader(url) },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function _delete(url: string) {
  const requestOptions = {
    method: RequestMethods.DELETE,
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function authHeader(url: string): HeadersInit {
  // return auth header with jwt if user is logged in and request is to the api url
  const user = userService.userValue;
  const isLoggedIn = user && user.token;
  const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(value: Response) {
  return value.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!value.ok) {
      if ([401, 403].includes(value.status) && userService.userValue) {
        userService.logout();
      }

      const error = (data && data.message) || value.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const fetchMethods = {
  get,
  post,
  put,
  delete: _delete,
};
