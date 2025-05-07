import { Router } from "express";

import { UserController } from "../controller/index.js";
import { jwtAuthGuard } from "../middleware/index.js";

const router = Router();

const controller = new UserController();

router
  .post("/register", controller.register)
  .post("/verifyOtp", controller.verifyOtp)
  .post("/login", controller.login)
  .post("/refreshToken", controller.refreshToken)
  .post("/logout", controller.logout)
  .get("/courses", jwtAuthGuard, controller.getAllCourses)
  .get("/course/:id", jwtAuthGuard, controller.getCourseById);

export { router as userRouter };
