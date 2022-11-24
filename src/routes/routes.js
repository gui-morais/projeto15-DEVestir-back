import express from "express";
import { signIn } from "../controllers/clients/signIn.js";
import { signUp } from "../controllers/clients/signUp.js";
import { validateClient } from "../middlewares/validateClient.js";
import { validateNewClient } from "../middlewares/validateNewClient.js";

const router = express.Router();
router.post("/sign-up", validateNewClient, signUp);
router.post("/sign-in", validateClient, signIn);

export default router;