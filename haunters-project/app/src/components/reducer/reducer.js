const initialState = {
    value: 0,
    submitted: false
    // deleted: false
  };
  
  function addReducer(state = initialState, action) {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, value: state.value + 1 };
      case "DECREASE":
        return { ...state, value: state.value - 1 };
      case "SUCCESS":
        return { ...state, value: state.submitted = true };
      case "FAILED":
        return { ...state, value: state.submitted = false };
      default:
        return state;
    }
  }
  
  export default addReducer;