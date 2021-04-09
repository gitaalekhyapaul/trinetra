import { Request, Response, NextFunction, Router } from "express";
import validateQuery from "../middlewares/validate-query";
import { postSignupRequestSchema, postSignupRequest } from "./auth.schema";
import { postSignup } from "./auth.service";

const router: Router = Router();

const handlePostSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, role } = req.body as postSignupRequest;
    const { authToken } = await postSignup({ email, password, role });
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

export default router;
