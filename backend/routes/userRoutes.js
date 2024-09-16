import express from "express";
import {loginController,registerController} from "../controllers/authController.js"
import {pushdataController} from "../controllers/dataController.js"
// import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);
// router.post("admin",adminController);
// router.post("/pushdata", pushdataController);




export default router;