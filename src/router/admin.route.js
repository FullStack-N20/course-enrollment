import { Router } from "express";

import { AdminController } from "../controller/index.js";
import { jwtAuthGuard, selfAuthGuard } from "../middleware/index.js";

const router = Router();

const controller = new AdminController();

router
  .post("/loginAdmin", controller.loginAdmin)
  .post("/profileAdmin", jwtAuthGuard, selfAuthGuard, controller.profileAdmin)
  .get("/users", jwtAuthGuard, selfAuthGuard, controller.getAllUsers)
  .get("/teacher/:id", jwtAuthGuard, selfAuthGuard, controller.getTeacherById)
  .put("/user/:id", jwtAuthGuard, controller.updateUserByID)
  .delete("/user/:id", jwtAuthGuard, selfAuthGuard, controller.deleteUserByID);

export { router as AdminRouter };
