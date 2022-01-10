import { blankState } from './state';

function reducer(state, action) {
  let draft;

  switch (action.type) {
    case 'SET_USER':
      draft = {
        ...state,
        user: action.payload
      };
      break;
    case 'UNSET_USER':
      draft = {
        ...state,
        user: blankState.user
      };
      break;
    default:
      throw new Error();
  }

  localStorage.setItem('state', JSON.stringify(draft));

  return draft;
}

export default reducer;
