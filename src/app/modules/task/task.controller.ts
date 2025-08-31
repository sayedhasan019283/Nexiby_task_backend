import { NextFunction, Request, Response } from "express";
import { taskService } from "./task.service";
import sendResponse from "../../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

const createTask = async (req : Request, res : Response, next : NextFunction) => {
    const payload = req.body
    const result = await taskService.createTask(payload);
    if (!result) {
        sendResponse(res, {
    code: StatusCodes.BAD_REQUEST,
    message: "Task creation failed",
    data: result,
  });
    }

     return  sendResponse(res, {
    code: StatusCodes.OK,
    message: "Task created successfully",
    data: result,
  });
}
const readTask = async (req : Request, res : Response, next : NextFunction) => {
    const result = await taskService.readTask();
    if (!result) {
        sendResponse(res, {
    code: StatusCodes.BAD_REQUEST,
    message: "No Task Found",
    data: result,
  });
    }

    sendResponse(res, {
    code: StatusCodes.OK,
    message: "All Task Found Successfully",
    data: result,
  });
}
const updateTask = async (req : Request, res : Response, next : NextFunction) => {
    const payload = req.body;
    const {taskId} = req.params
    const result = await taskService.updateTask(taskId, payload)
     if (!result) {
        sendResponse(res, {
    code: StatusCodes.BAD_REQUEST,
    message: "No Task Found for update",
    data: result,
  });
    }

    sendResponse(res, {
    code: StatusCodes.OK,
    message: "Task Update Successfully",
    data: result,
  });
}

export const taskController = {
    readTask,
    createTask,
    updateTask
} 