import { Router } from "express";

import { CourseController } from "../controller/index.js";
import { jwtAuthGuard, selfAuthGuard } from "../middleware/index.js";

const router = Router();

const controller = new CourseController();

router
  .get("/courses", jwtAuthGuard, controller.getAll)
  .post("/course", jwtAuthGuard, selfAuthGuard, controller.create)
  .put("/course/:id", jwtAuthGuard, selfAuthGuard, controller.updateCourseById)
  .delete(
    "/course/:id",
    jwtAuthGuard,
    selfAuthGuard,
    controller.deleteCourseById
  );

export { router as courseRouter };
