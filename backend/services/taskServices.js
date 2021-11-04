const taskModels = require('../models/Task');

const createTasks = async(task) => {
  if(!task) {
    return { code: 422, message: 'Please register a task!' }
  }

  const findTask = await taskModels.findTasks(task)

  if(findTask) {
    return { code: 422, message: 'Task already exists' }
  }
  const newTask = await taskModels.createTasks(task);
  return newTask;
}

const getAllTasks = async() => {
  const tasks = await taskModels.getAllTasks();

  return tasks;
}

const getByTask = async(id) => {
  const task = await taskModels.getByTask(id);
  if(!task) {
    return { code: 404, message: 'task not found' }
  }
  return task;
}

const updateTasks = async(id, task) => {

  if(!task) {
    return { code: 422, message: 'Please register a task!' }
  }
  const findTask = await taskModels.findTasks(task);
  if(findTask) {
    return { code: 422, message: 'Task already exists' }
  }
  const updatedTask = await taskModels.updateTasks(id, task);

  return updatedTask;
}

const deleteTasks = async(id) => {
  const task = await taskModels.getByTask(id);
  console.log(task)
  if(!task) {
    return { code: 404, message: 'task not found' }
  }
  const deleteTask = await taskModels.deleteTasks(id);
  return deleteTask;
}

module.exports = {
  createTasks,
  getAllTasks,
  getByTask,
  updateTasks,
  deleteTasks
}