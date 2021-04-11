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

const codeValidator = yup
  .string()
  .trim()
  .matches(
    /^[a-zA-Z0-9]{10}$/,
    "code must be alphanumeric and 10 characters long"
  )
  .required();

const slotValidator = yup
  .object({
    day: yup
      .string()
      .trim()
      .matches(/^D[1-5]$/, "slot.day has to be D1-D5")
      .required(),
    period: yup
      .string()
      .trim()
      .matches(/^P[1-8]$/, "slot.period has to be P1-P8")
      .required(),
  })
  .required();

export const postJoinRequestSchema = yup
  .object({
    code: codeValidator,
  })
  .required();

export type postJoinRequest = yup.InferType<typeof postJoinRequestSchema>;

export const putEditRequestSchema = yup
  .object({
    code: codeValidator,
    slot: slotValidator,
    change: yup
      .object({
        subject: yup.string().trim().required(),
        faculty: yup.string().trim().required(),
      })
      .required(),
  })
  .required();

export type putEditRequest = yup.InferType<typeof putEditRequestSchema>;

export const deleteRequestSchema = yup
  .object({
    code: codeValidator,
    slot: slotValidator,
  })
  .required();

export type deleteRequest = yup.InferType<typeof deleteRequestSchema>;

export const getClassRequestSchema = yup
  .object({
    code: codeValidator,
  })
  .required();

export type getClassRequest = yup.InferType<typeof getClassRequestSchema>;
