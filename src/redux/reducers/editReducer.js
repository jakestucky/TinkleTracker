const editReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default editReducer;
