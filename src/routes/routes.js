import express from "express";
import { signIn } from "../controllers/clients/signIn.js";
import { signUp } from "../controllers/clients/signUp.js";
import { getOneProduct } from "../controllers/products/getOneProduct.js";
import { getProducts } from "../controllers/products/getProducts.js";
import { postProducts } from "../controllers/products/postProducts.js";
import { putProducts } from "../controllers/products/putProducts.js";
import { validateClient } from "../middlewares/validateClient.js";
import { validateNewClient } from "../middlewares/validateNewClient.js";
import { validateProduct } from "../middlewares/validateProduct.js";
import { validateShop } from "../middlewares/validateShop.js";
import { validateToken } from "../middlewares/validateToken.js";

const router = express.Router();
router.post("/sign-up", validateNewClient, signUp);
router.post("/sign-in", validateClient, signIn);
router.post("/products", validateProduct, postProducts);
router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);
router.put("/products/", validateToken, validateShop, putProducts);

export default router;