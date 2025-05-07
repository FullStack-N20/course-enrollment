import { Router } from "express";

import { TeacherController } from "../controller/index.js";
import { jwtAuthGuard, selfAuthGuard } from "../middleware/index.js";

const router = Router();

const controller = new TeacherController();

router
  .post(
    "/registerTeacher",
    jwtAuthGuard,
    selfAuthGuard,
    controller.registerTeacher
  )
  .post("/verifyTeacher", controller.verifyOTP)
  .post("/loginTeacher", controller.loginTeacher)
  .post("/profileTeacher", controller.profileTeacher);

export { router as teacherRouter };
