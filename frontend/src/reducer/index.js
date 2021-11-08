const initialState = '';

const reducer = (state = initialState, action) => {
  if(action.type === 'sendTask') {
    return {
      task: action.tasks
    }
  }
  return state
}

export default reducer;