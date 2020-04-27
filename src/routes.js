import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
  const routesSummary = [
    '/users'
  ]

  return res.json({ routes: routesSummary });
});

// Authentication
routes.post('/sessions', SessionController.store);

// Users routes
routes.post('/users', UserController.store);

export default routes;
