export async function validateShop(req, res, next) {
    const shopping = req.body;
    if(!shopping) {
        return res.status(400).send("A array de produtos está vazio")
    }
    if(shopping.length===0) {
        return res.status(400).send("A array de produtos está vazio")
    }
    shopping.forEach(e => {
        if(!e.id) {
            return res.status(400).send("Um dos produtos está sem id");
        }
        if(!e.quantity) {
            return res.status(400).send("A quantidade de um dos produtos não foi informada");
        }
        const quantity = Number(e.quantity);
        if(!Number.isInteger(quantity)) {
            return res.status(400).send("A quantidade de um dos produtos não é inteira");
        }
    });

    next();
}