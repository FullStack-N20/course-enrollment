import { Router } from "express";

import { SuperAdminController } from "../controller/index.js";
import {
  jwtAuthGuard,
  selfAuthGuard,
  superAdminGuard,
} from "../middleware/index.js";

const router = Router();

const controller = new SuperAdminController();

router
  .post("/registerSuperAdmin", controller.registerSuperAdmin)
  .post("/loginSuperAdmin", controller.loginSuperAdmin)
  .post(
    "/profileSuperAdmin",
    jwtAuthGuard,
    superAdminGuard,
    controller.profileSuperAdmin
  )
  .post("/createAdmin", jwtAuthGuard, superAdminGuard, controller.createAdmin)
  .get("/admins", jwtAuthGuard, superAdminGuard, controller.getAllAdmins)
  .put("/admin/:id", jwtAuthGuard, superAdminGuard, controller.updateAdminByID)
  .delete(
    "/admin/:id",
    jwtAuthGuard,
    superAdminGuard,
    controller.deleteAdminByID
  );

export { router as superAdminRouter };
