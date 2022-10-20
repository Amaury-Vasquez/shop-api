import Joi from 'joi';

export interface Product {
  name: string;
  price: number;
  image: string;
}

const name = Joi.string().min(4).max(50);
const price = Joi.number();
const image = Joi.string().uri();

export const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});
