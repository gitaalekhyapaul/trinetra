import { Request, Response, NextFunction, Router } from "express";

import { validateJwt } from "../middlewares/validate-jwt";
import validateQuery from "../middlewares/validate-query";
import { postCreateRequest, postCreateRequestSchema } from "./class.schema";
import { verifyTeacher, postCreate } from "./class.service";

const router: Router = Router();

const handlePostCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { section } = req.body as postCreateRequest;
    const { code } = await postCreate({ section }, res.locals.user.email);
    res.json({
      success: true,
      code,
    });
  } catch (err) {
    next(err);
  }
};

router.post(
  "/create",
  validateJwt(),
  verifyTeacher,
  validateQuery("body", postCreateRequestSchema),
  handlePostCreate
);

export default router;
