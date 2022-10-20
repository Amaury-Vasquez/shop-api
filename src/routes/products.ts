import { NextFunction, Request, Response, Router } from 'express';

import { ProductService } from '../services/productService';

const router = Router();
const service = new ProductService();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await service.getAll().then((products) =>
      res.status(200).json({
        products,
        message: 'Product list',
      })
    );
  } catch (e) {
    next(e);
  }
});

export default router;
