import * as yup from "yup";
import { ObjectID } from "mongodb";

export const postCreateRequestSchema = yup
  .object({
    section: yup.string().trim().required(),
  })
  .required();

export type postCreateRequest = yup.InferType<typeof postCreateRequestSchema>;

export interface classDBSchema {
  _id?: ObjectID;
  section: string;
  code: string;
  facultyAdvisor: string;
  timetable: Map<string, Map<string, { subject: string; faculty: string }>>;
}

export const postJoinRequestSchema = yup
  .object({
    code: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z0-9]{10}$/,
        "code must be alphanumeric and 10 characters long"
      )
      .required(),
  })
  .required();

export type postJoinRequest = yup.InferType<typeof postJoinRequestSchema>;
