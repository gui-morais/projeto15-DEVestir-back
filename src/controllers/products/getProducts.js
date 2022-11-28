import { productsCollection } from "../../database/db.js";

export async function getProducts(req, res) {
    try{
        const products = await (await productsCollection.find({}).toArray()).reverse();
        return res.status(200).send(products);
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}