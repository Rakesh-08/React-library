// global data using context api

import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export default function StateProvider({ reducer, intialState, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
      {children}
    </StateContext.Provider>
  );
}

export const StateContextValue = () => useContext(StateContext);
