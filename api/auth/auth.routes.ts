import { Request, Response, NextFunction, Router } from "express";
import validateQuery from "../middlewares/validate-query";
import {
  postSignupRequestSchema,
  postSignupRequest,
  postLoginRequestSchema,
  postLoginRequest,
} from "./auth.schema";
import { postLogin, postSignup } from "./auth.service";

const router: Router = Router();

const handlePostSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = req.body as postSignupRequest;
    const { authToken } = await postSignup({ name, email, password, role });
    res.json({
      success: true,
      authToken,
    });
  } catch (err) {
    next(err);
  }
};

const handlePostLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body as postLoginRequest;
    const { authToken } = await postLogin({ email, password });
    res.json({
      success: true,
      authToken,
    });
  } catch (err) {
    next(err);
  }
};

router.post(
  "/signup",
  validateQuery("body", postSignupRequestSchema),
  handlePostSignup
);

router.post(
  "/login",
  validateQuery("body", postLoginRequestSchema),
  handlePostLogin
);

export default router;
