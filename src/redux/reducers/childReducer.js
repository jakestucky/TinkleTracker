const childReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHILD_DATA':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default childReducer;
