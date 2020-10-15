const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EVENT_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default eventReducer;
