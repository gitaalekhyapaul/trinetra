import { NextFunction, Request, Response } from "express";
import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import { ObjectId } from "mongodb";

import { errors } from "../error/error.constants";
import { DatabaseService } from "../services/database.service";
import { postCreateRequest, classDBSchema } from "./class.schema";
import { userDBSchema, userInfo } from "../auth/auth.schema";

export const verifyTeacher = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (res.locals.user.role !== "teacher") throw errors.FORBIDDEN;
    next();
  } catch (err) {
    next(err);
  }
};

const initTable = (): Map<
  string,
  Map<string, { subject: string; faculty: string }>
> => {
  const timetable = new Map(new Map()) as Map<
    string,
    Map<string, { subject: string; faculty: string }>
  >;
  for (let i = 1; i <= 5; i++) {
    let day = new Map() as Map<string, { subject: string; faculty: string }>;
    for (let j = 1; j <= 8; j++) {
      day.set(`P${j}`, { subject: "", faculty: "" });
    }
    timetable.set(`D${i}`, day);
  }
  return timetable;
};

export const postCreate = async (
  classDetails: postCreateRequest,
  facultyAdvisor: string
): Promise<{ code: string }> => {
  const classCode = customAlphabet(alphanumeric, 10)();
  let classObj: classDBSchema = {
    code: classCode,
    facultyAdvisor,
    section: classDetails.section,
    timetable: initTable(),
  };
  const classDb = await DatabaseService.getInstance().getDb("classes");
  const res1 = await classDb.insertOne(classObj);
  if (res1.insertedCount <= 0) throw errors.MONGODB_QUERY_ERROR;
  const userDb = await DatabaseService.getInstance().getDb("users");
  const res2 = await userDb.updateOne(
    { email: facultyAdvisor, role: "teacher" },
    {
      $push: {
        classes: new ObjectId(res1.insertedId),
      },
    }
  );
  if (res2.modifiedCount <= 0) throw errors.MONGODB_QUERY_ERROR;
  return { code: classCode };
};

export const postJoin = async (code: string, user: userInfo) => {
  const dbService = await DatabaseService.getInstance();
  const userExists = await (
    await dbService.getDb("users")
  ).findOne<userDBSchema>({
    email: user.email,
    role: user.role,
  });
  if (!userExists) throw errors.NOT_FOUND;
  const classExists = await (
    await dbService.getDb("classes")
  ).findOne<classDBSchema>({ code });
  if (!classExists) throw errors.NOT_FOUND;
  const result = await (await dbService.getDb("users")).updateOne(
    { email: userExists.email },
    {
      $addToSet: {
        classes: classExists._id,
      },
    }
  );
  if (result.modifiedCount <= 0) throw errors.MONGODB_QUERY_ERROR;
};
