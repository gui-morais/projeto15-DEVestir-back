export async function getProducts(req, res) {
    try{
        const products = await productsCollection.find({}).toArray();
        return res.status(200).send(products);
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}