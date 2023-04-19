import { errorHandler } from "./error-handler";
import { jwtMiddleware } from "./middleware";
import { NextApiResponse } from "next";

export function apiHandler(handler: Function) {
  return async (request: Request, result: NextApiResponse) => {
    try {
      await jwtMiddleware(request, result);
      await handler(request, result);
    } catch (err: unknown) {
      errorHandler(err as Error, result);
    }
  };
}
