import { createContext } from "react";
export const itemContext = createContext(null);
const itemContextProvider = (props) => {
  return <itemContext.Provider>{props.children}</itemContext.Provider>;
};

export default itemContextProvider;
