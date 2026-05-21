import { Router } from "express";
import userController from "../controllers/UserController";

const router = Router();

router.get("/:id", userController.getUserDetails);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/:id/change-password", userController.changePassword);

export default router;