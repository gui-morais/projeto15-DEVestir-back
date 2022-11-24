import { productsCollection } from "../../database/db.js";

export async function postProducts(req, res) {

    try{
        await productsCollection.insertOne(req.body);
        return res.sendStatus(201);
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}