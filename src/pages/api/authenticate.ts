const jwt = require("jsonwebtoken");
const users: IUser[] = require("../../data/users.json");

import getConfig from "next/config";
import { NextApiResponse } from "next";
import { apiHandler } from "../../helper/api/handler";
import { IRequestBody, IUser, RequestMethods, messages } from "../../naming";

const { serverRuntimeConfig } = getConfig();

export default apiHandler(handler);

function handler(request: Request, result: NextApiResponse) {
  switch (request.method) {
    case RequestMethods.POST:
      return authenticate();
    default:
      return result.status(405).end(`Method ${request.method} Not Allowed`);
  }

  function authenticate() {
    const requestBody = request.body as IRequestBody | null;
    let user = undefined;
    if (requestBody) {
      user = users.find(
        (singleUser) =>
          singleUser.username === requestBody.username &&
          singleUser.password === requestBody.password
      );
    }

    if (!user) throw messages.INCORRECT_DATA;

    //jwt token will be valid for 7 days
    const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, {
      expiresIn: "7d",
    });

    return result.status(200).json({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      token,
    });
  }
}
