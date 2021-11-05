import React from 'react';

// handleChange(e) {

// }

function Forms() {
  return (
    <form method="POST">
      <label htmlFor="input-task">
        <input
        id="input-task"
        type="text" 
        placeholder="Adicione uma tarefa"
        name="task"
        // onChange={ handleChange }
        />
      </label>
      <button /* onClick={ handleClick } */> Adicionar tarefa</button>
    </form>
  );
}

export default Forms;