const expressJwt = require("express-jwt");
const util = require("util");

import { NextApiResponse } from "next";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export function jwtMiddleware(request: Request, result: NextApiResponse) {
  const middleware = expressJwt({
    secret: serverRuntimeConfig.secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/authenticate"],
  });

  return util.promisify(middleware)(request, result);
}
