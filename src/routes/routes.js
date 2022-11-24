import express from "express";
import { signUp } from "../controllers/clients/signUp";
import { validateNewClient } from "../middlewares/validateNewClient";

const router = express.Router();
router.post("/sign-up", validateNewClient, signUp);

export default router;