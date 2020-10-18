const goalReducer = (state = [], action) => {
  switch (action.type) {
    case 'GOAL_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default goalReducer;
