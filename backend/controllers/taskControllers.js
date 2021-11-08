const tasksService = require('../services/taskServices');

const createTasks = async(req, res) => {
  const { task } = req.body;
  const newTask = await tasksService.createTasks(task)
  try {
    return res.status(201).json({  message: `A tarefa "${newTask.task}" foi criada com sucesso` });
  }catch(e) {
    return res.status(e.code).json({ message: e.message });
  }
}

const getAllTasks = async(_req, res) => {
  const tasks = await tasksService.getAllTasks()
  try {
    return res.status(200).json(tasks);
  }catch(e) {
    return res.status(e.code).json({ message: e.message });
  }
}

const getByTask = async(req, res) => {
  const { id } = req.params;
  const task = await tasksService.getByTask(id);
  try {
    return res.status(200).json({message: `À tarefa que você pegou é essa: ${task.task}`});
  }catch(e) {
    return res.status(e.code).json({ message: e.message });
  }
}

const updatedTasks = async(req, res) => {
  const { id } = req.params;
  const { task } = req.body
  const updateTask = await tasksService.updateTasks(id, task);
  try {
    return res.status(202).json({message: `A tarefa "${updateTask.task}" foi atualizada com sucesso `});
  }catch(e) {
    return res.status(e.code).json({ message: e.message });
  }
}

const deleteTasks = async(req, res) => {
  const { id } = req.params;
  const task = await tasksService.getByTask(id)
  await tasksService.deleteTasks(id);
  
  try {
    return res.status(204).json({ message: `A tarefa "${task.task}" foi deletada com sucesso` });
  }catch(e) {
    return res.status(e.code).json({ message: e.message });
  }
}

module.exports = {
  createTasks,
  getAllTasks,
  getByTask,
  updatedTasks,
  deleteTasks
}