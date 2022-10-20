import express, { Express } from 'express';

import products from './products';
// import schedule from './schedule';

export function routerApi(app: Express) {
  // Defines principal app route
  const router = express.Router();
  app.use('/api/v1', router);

  // Defines sub routes
  router.use('/products', products);
  // router.use('/schedule', schedule);
}
