import { Router } from "express";

import {
  AdminRouter,
  courseRouter,
  superAdminRouter,
  userRouter,
  teacherRouter
} from "./index.js";

const router = Router();

router
  .use("/api/auth", userRouter)
  .use("/api/auth", superAdminRouter)
  .use("/api/auth", AdminRouter)
  .use("/api", courseRouter)
  .use("/api", teacherRouter);

export { router as mainRouter };
