import { Request, Response, NextFunction, Router } from "express";

import { validateJwt } from "../middlewares/validate-jwt";
import validateQuery from "../middlewares/validate-query";
import {
  deleteRequestSchema,
  postCreateRequest,
  postCreateRequestSchema,
  postJoinRequest,
  postJoinRequestSchema,
  putEditRequest,
  putEditRequestSchema,
} from "./class.schema";
import { verifyTeacher, postCreate, postJoin, putEdit } from "./class.service";

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

const handlePostJoin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { code } = req.body as postJoinRequest;
    await postJoin(code, { ...res.locals.user });
    res.json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

const handlePutEdit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { change, code, slot } = req.body as putEditRequest;
    const changes = await putEdit(res.locals.user, { code, slot, change });
    res.json({
      success: true,
      change: { ...changes },
    });
  } catch (err) {
    next(err);
  }
};

const handleDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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

router.post(
  "/join",
  validateJwt(),
  validateQuery("body", postJoinRequestSchema),
  handlePostJoin
);

router.put(
  "/edit",
  validateJwt(),
  verifyTeacher,
  validateQuery("body", putEditRequestSchema),
  handlePutEdit
);

router.delete(
  "/delete",
  validateJwt(),
  verifyTeacher,
  validateQuery("body", deleteRequestSchema),
  handleDelete
);

export default router;
