import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axiosApi from '../api/request';

function Forms() {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => setTasks(value);

  const handleClick = (e) => {
    e.preventDefault() // para não atualizar depois de uma modificação na página

    axiosApi.post('/', { task: tasks }); // segundo argumento é o req.body

    dispatch({
      type: 'sendTask',
      tasks: true
    });

    setTasks('');
  }

  return (
    <form method="POST">
      <label htmlFor="input-task">
        <input
        id="input-task"
        type="text" 
        placeholder="Adicione uma tarefa"
        value={ tasks }
        name="task"
        onChange={ handleChange }
        required
        />
      </label>
      <button onClick={ handleClick } > Adicionar tarefa</button>
    </form>
  );
}

export default Forms;