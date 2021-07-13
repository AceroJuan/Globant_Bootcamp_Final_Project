import { createContext, useContext, useState } from "react";

/***
 * initializing context 'searchContext'
 */

const searchContext = createContext("");

// return of the update context state
export const useSearch = () => {
  return useContext(searchContext);
};

// state logical handle
const useProvideSearch = () => {
  const [state, setState] = useState({
    movies: [],
    tv: [],
    people: [],
  });
  return {
    state,
    setState,
  };
};

export const ProvideSearch = ({ children }) => {
  const context = useProvideSearch();
  return (
    <searchContext.Provider value={context}>{children}</searchContext.Provider>
  );
};
