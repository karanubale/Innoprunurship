import express from "express";
// import {loginController,registerController,} from "../controllers/authController.js"
import {pushdataController,getSingledataController,getAlldataController,getAlldataController2,putipController} from "../controllers/dataController.js"
// import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

router.post("/pushdata", pushdataController);
router.post("/getadata",getSingledataController);
router.get("/result",getAlldataController);
router.get("/result2",getAlldataController2)
router.post("/updateip",putipController)
// http://localhost:4000/api/v1/updateip
export default router;