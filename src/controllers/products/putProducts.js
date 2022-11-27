import { ObjectId } from "mongodb";
import { productsCollection } from "../../database/db.js";

export async function putProducts(req, res) {
    const products = req.body;
    for(let i=0; i<products.length; i++) {
        try {
            const e = products[i];
            const product = await productsCollection.findOne({_id: ObjectId(e.id)});
            if(!product) {
                return res.status(400).send("Um dos produtos não foi encontrado.");
            }
            const quantity = Number(e.quantity);
            const stock = Number(product.stock);
            if(quantity>stock) {
                return res.status(400).send("Um dos produtos possui quantidade maior que o estoque existente");
            }
            product.stock = `${stock-quantity}`;
            await productsCollection.updateOne({_id: ObjectId(e.id)}, {$set: product});
        } catch(err) {
            console.log(err);
            return res.sendStatus(500);
        }
    }
    return res.sendStatus(200);
}