import joi from "joi";

export const newClientSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required()
});

export const clientSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).required()
});

export const productSchema = joi.object({
    name: joi.string().min(3).required(),
    description: joi.string().min(3).required(),
    image: joi.string().uri().required(),
    price: joi.number().required()
})