import mongoose, { Schema, Document } from 'mongoose';
import { TTask } from './task.interface';

const taskSchema: Schema = new Schema<TTask>({
  title: { type: String, required: true },
  status: { type: String, default: "pending", enum: ["pending", "completed"] }
});

export const TaskModel = mongoose.model<TTask & Document>('Task', taskSchema);


