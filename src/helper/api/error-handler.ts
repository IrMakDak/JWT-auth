import { NextApiResponse } from "next";

export function errorHandler(error: Error, result: NextApiResponse) {
  if (typeof error === "string") {
    return result.status(400).json({ message: error });
  }
  if (error.name === "UnauthorizedError") {
    return result.status(401).json({ message: "Invalid Token" });
  }

  return result.status(500).json({ message: error.message });
}
