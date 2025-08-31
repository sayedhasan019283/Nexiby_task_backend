import express from 'express';
import { AuthRoutes } from '../app/modules/Auth/auth.route';
import { UserRoutes } from '../app/modules/user/user.route';
import path from 'path';
import { taskRoute } from '../app/modules/task/task.route';
const router = express.Router();

const apiRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/task',
    route: taskRoute,
  }
];   

apiRoutes.forEach(route => router.use(route.path, route.route));

export default router;
