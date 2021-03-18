import { useReducer } from 'react';
import MyContext from './index';

const reducer = (previousState, newState) => ({
  ...previousState,
  ...newState
});

const AppProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, {
    count: 0,
    name: 'Oreoluwade'
  });

  return (
    <MyContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppProvider;
