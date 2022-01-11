import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
// store
import reducer from './reducer';
import initialState from './state';

const Store = createContext({});

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export function useDispatch() {
  const { dispatch } = useContext(Store);

  return dispatch;
}

export function useSelector(callback) {
  const { state } = useContext(Store);

  return callback(state);
}

export default Store;
