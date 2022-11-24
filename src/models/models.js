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