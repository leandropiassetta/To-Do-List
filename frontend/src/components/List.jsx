import React, { useState, useEffect } from 'react';
import axiosApi from '../api/request';

function CreateList() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axiosApi.get('/')
    .then((task) => setTasks(task.data))
    .catch((error) => `Ocorreu um erro chamado: ${error}`)
  }, []);

  return (
    <ul>
      {tasks.map(({task}, index) => <li key={index}>
        { task }
      </li>)}
    </ul>
  )
}

export default CreateList;