import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

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

export default Store;
