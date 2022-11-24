import express from "express";
import { signIn } from "../controllers/clients/signIn.js";
import { signUp } from "../controllers/clients/signUp.js";
import { getOneProduct } from "../controllers/products/getOneProduct.js";
import { getProducts } from "../controllers/products/getProducts.js";
import { postProducts } from "../controllers/products/postProducts.js";
import { validateClient } from "../middlewares/validateClient.js";
import { validateNewClient } from "../middlewares/validateNewClient.js";
import { validateProduct } from "../middlewares/validateProduct.js";

const router = express.Router();
router.post("/sign-up", validateNewClient, signUp);
router.post("/sign-in", validateClient, signIn);
router.post("/products", validateProduct, postProducts);
router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);

export default router;