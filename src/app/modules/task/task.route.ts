import { TaskValidation } from './task.validation';
import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { taskController } from './task.controller';

const router = express.Router()

router.post(
    '/create',
    validateRequest(TaskValidation.taskValidationSchema),
    taskController.createTask
)
router.get(
    '/read',
    taskController.readTask
)
router.patch(
    '/update/:taskId',
    taskController.updateTask
)

export const taskRoute = router