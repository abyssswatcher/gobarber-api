import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => {
  const routesSummary = [
    '/users'
  ]

  return res.json({ routes: routesSummary });
});

// Users routes
routes.post('/users', UserController.store);

export default routes;
