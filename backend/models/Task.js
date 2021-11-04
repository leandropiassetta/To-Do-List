const { ObjectId } = require('mongodb');
const connect = require('../connection');

const createTasks = async(task) => {
  console.log(task)
  const db = await connect();
  const newTask = await db.collection('tasks').insertOne({ task });
  console.log(newTask)
  return { _id: newTask.insertedId, task }
}

const getAllTasks = async() => {
  const db = await connect();
  const tasks = await db.collection('tasks').find().toArray();

  return tasks
}

const getByTask = async(id) => {
  const db  = await connect();
  const task = await db.collection('tasks').findOne({_id: ObjectId(id)});

  return task
}

const findTasks = async(task) => {
  const db = await connect();
  const findTask = await db.collection('tasks').findOne({task});
  return findTask
}


const updateTasks = async(id, task) => {
  const db = await connect()
  await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { task }  });

  return { id, task }
}

const deleteTasks = async(id) => {
  const db = await connect();
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
}

module.exports = {
  createTasks,
  getAllTasks,
  updateTasks,
  deleteTasks,
  getByTask,
  findTasks
}