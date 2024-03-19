import { createContext, useState } from "react";
export const FirstContext = createContext(null);
const FirstContextProvider = (props) => {
  const userName = "HsuShweSinOo";
  const address = "Yangon";
  return <FirstContext.Provider value={{ userName, address }}>{props.children}</FirstContext.Provider>;
};

export default FirstContextProvider;
