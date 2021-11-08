import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import axiosApi from '../api/request';

function CreateList() {
  
  const [tasks, setTasks] = useState([]);gst
  
  const getTasks = useCallback(
    () => {
      axiosApi.get('/')
      .then((task) => setTasks(task.data))
      .catch((error) => `Ocorreu um erro chamado: ${error}`)
    }, []);
    
    useEffect(() => {
      getTasks();
    }, [getTasks, tasks]);
    
  return (
    <ul>
      {tasks.map(({task}, index) => <li key={index}>
        { task }
      </li>)}
    </ul>
  );
}

const mapStateToProps = (state) => (
  state => ({
    task: state.task
  })
);

export default connect(mapStateToProps)(CreateList);