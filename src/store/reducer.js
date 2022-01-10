import initialState from './state';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'UNSET_USER':
      return {
        ...state,
        user: initialState.user
      };
    default:
      throw new Error();
  }
}

export default reducer;
