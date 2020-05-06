import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  const routesSummary = ['/users'];

  return res.json({ routes: routesSummary });
});

// Sing-in and Log-in
routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

// Authentication middleware, all routes after this will need a jwt token
routes.use(authMiddleware);

// Users
routes.put('/users', UserController.update);

// Uploads
routes.post('/files', FileController.store);

export default routes;
