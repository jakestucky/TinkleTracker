const petReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.payload;
    default:
      return state;
  }
}

export default petReducer;
/*
what does our redux state look like:
{
  errors: {},
  loginMode: 'login',
  user: {},

  // NEW
  pets: [
    {firstName: 'fido', user_id: 2},
    {firstName: 'snowball', user_id: 2},
  ],
}
*/