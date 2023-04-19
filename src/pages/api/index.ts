import { apiHandler } from "../../helper/api/handler";
import { RequestMethods, IUser } from "@/naming";
import { NextApiResponse } from "next";

const users: IUser[] = require("../../data/users.json");

function handler(request: Request, result: NextApiResponse) {
  switch (request.method) {
    case RequestMethods.GET:
      return getUsersWithoutPassword();
    default:
      return result.status(405).end(`Method ${request.method} Not Allowed`);
  }

  function getUsersWithoutPassword() {
    const response = users.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
    return result.status(200).json(response);
  }
}

export default apiHandler(handler);
