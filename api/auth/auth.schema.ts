import * as yup from "yup";

export interface userInfo {
  email: string;
  role: "teacher" | "student";
}

export const postSignupRequestSchema = yup
  .object({
    email: yup.string().trim().email().required(),
    password: yup
      .string()
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/,
        "password has to be more than 8 characters, one uppercase, one lowercase and one special character compulsory"
      )
      .required(),
    role: yup
      .string()
      .trim()
      .matches(/^(teacher|student)$/, "role can be teacher or student")
      .required(),
  })
  .required();

export type postSignupRequest = yup.InferType<typeof postSignupRequestSchema>;

export interface userDBSchema {
  email: string;
  password: string;
  classes: Array<string>;
}
