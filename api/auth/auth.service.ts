import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";

import { errors } from "../error/error.constants";
import { DatabaseService } from "../services/database.service";
import { postSignupRequest, userDBSchema } from "./auth.schema";

const createJwt = async (user: {
  email: string;
  role: string;
}): Promise<{ authToken: string }> => {
  const authToken = await sign({ ...user }, process.env.JWT_SECRET!, {
    issuer: "team-bytecoders",
    expiresIn: "1d",
  });
  return { authToken };
};

export const postSignup = async (
  user: postSignupRequest
): Promise<{ authToken: string }> => {
  const db = await DatabaseService.getInstance().getDb("users");
  const userExists = await db.countDocuments({ email: user.email });
  if (userExists) throw errors.DUPLICATE_USER;
  const hashedPassword = await hash(user.password, 12);
  const entry: userDBSchema = {
    ...user,
    password: hashedPassword,
    classes: [],
  };
  const result = await db.insertOne(entry);
  if (result.insertedCount <= 0) throw errors.MONGODB_QUERY_ERROR;
  return await createJwt({ email: user.email, role: user.role });
};
