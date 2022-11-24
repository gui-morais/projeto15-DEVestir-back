import { ObjectID } from "bson";
import { productsCollection } from "../../database/db.js";

export async function getOneProduct(req, res) {
    try{
        const _id = ObjectID(req.params.id);
        const product = await productsCollection.findOne({_id});
        if(!product) {
            return res.status(404).send("Produto não encontrado");
        }
        return res.status(200).send(product);
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}