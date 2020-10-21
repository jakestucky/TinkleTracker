const editReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_DATA':
      return action.payload;
    case 'UPDATE_EDIT_EVENT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default editReducer;
