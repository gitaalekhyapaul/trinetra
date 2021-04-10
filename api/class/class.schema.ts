import * as yup from "yup";

export const postCreateRequestSchema = yup
  .object({
    section: yup.string().trim().required(),
  })
  .required();

export type postCreateRequest = yup.InferType<typeof postCreateRequestSchema>;

export interface classDBSchema {
  section: string;
  code: string;
  facultyAdvisor: string;
  timetable: Map<string, Map<string, { subject: string; faculty: string }>>;
}
