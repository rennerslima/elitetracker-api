import { Router } from 'express';

import packagejson from '../package.json';
import { HabitsComtroller } from './controllers/habits.controller';
import { FocusTimeComtroller } from './controllers/focus-time.controller';
import { AuthController } from './controllers/auth.controller';
import { authMiddleware } from './middlewares/auth.middlewares';

export const routes = Router();

const habitsComtroller = new HabitsComtroller();
const focusTimeComtroller = new FocusTimeComtroller();
const authController = new AuthController();

routes.get('/', (request, response) => {
  const { name, description, version } = packagejson;

  return response.status(200).json({ name, description, version });
});

routes.get('/auth', authController.auth);

routes.get('/auth/callback', authController.authCallback);

routes.use(authMiddleware);

routes.get('/habits', habitsComtroller.index);

routes.get('/habits/:id/metrics', habitsComtroller.metrics);

routes.post('/habits', habitsComtroller.store);

routes.delete('/habits/:id', habitsComtroller.remove);

routes.patch('/habits/:id/toggle', habitsComtroller.toggle);

routes.post('/focus-time', focusTimeComtroller.store);

routes.get('/focus-time', focusTimeComtroller.index);

routes.get('/focus-time/metrics', focusTimeComtroller.matricsByMonth);
