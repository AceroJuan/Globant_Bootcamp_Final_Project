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
  const [state, setState] = useState("");
  const setNewValue = (text) => {
    if (typeof text === "string") {
      setState(text);
      return;
    }

    return;
  };
  return {
    state,
    setNewValue,
  };
};

export const ProvideSearch = ({ children }) => {
  const context = useProvideSearch();
  return (
    <searchContext.Provider value={context}>
      {" "}
      {children}{" "}
    </searchContext.Provider>
  );
};
