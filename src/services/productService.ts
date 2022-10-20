import { Product } from '../schemas/productSchema';
import { faker } from '@faker-js/faker';

export class ProductService {
  private products: Product[];

  constructor() {
    this.products = this.generateFake();
  }

  private generateFake() {
    return Array.from({ length: 100 }, () => {
      const name = faker.commerce.productName();
      const price = parseInt(faker.commerce.price(100, 5000));
      const image = faker.image.imageUrl(640, 480, 'sports', true);

      return { name, price, image };
    });
  }

  async getAll() {
    return this.products;
  }
}
