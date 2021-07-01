import { createContext, useContext, useState } from "react";

/***
 * inicializando el context 'searchContext'
 */

const searchContext = createContext("");

// retorno del estado actual de context
export const useSearch = () => {
  return useContext(searchContext);
};

// manejo de logica del estado
const useProvideSearch = () => {
  const [state, setState] = useState([]);
  return {
    state,
    setState,
  };
};

export const ProvideSearch = ({ children }) => {
  const context = useProvideSearch();
  console.log("context", context);
  return (
    <searchContext.Provider value={context}>{children}</searchContext.Provider>
  );
};
