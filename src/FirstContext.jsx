import { createContext, useState } from "react";
export const FirstContext = createContext(null);
const FirstContextProvider = (props) => {
  const userName = "HsuShweSinOo";
  const address = "Yangon";
  const [num, setNum] = useState(0);
  return <FirstContext.Provider value={{ userName, address, num, setNum }}>{props.children}</FirstContext.Provider>;
};

export default FirstContextProvider;
