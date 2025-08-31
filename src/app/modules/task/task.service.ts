import { TTask } from "./task.interface";
import { TaskModel } from "./task.model";

const createTask = async (payload : Partial<TTask>) => {
    const result = await TaskModel.create(payload);
    return result;
}

const readTask = async () => {
    const result = await TaskModel.find({})
    return result
}

const updateTask = async (taskId : string, payload : Partial<TTask>) => {
    const result = await TaskModel.findByIdAndUpdate(taskId, payload, {new : true})

    return result
}

export const taskService = {
    createTask,
    readTask,
    updateTask
}