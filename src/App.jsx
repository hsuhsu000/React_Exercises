import React from "react";
import Main from "./layout/Main";
import ItemContextProvider from "./store/itemContext";
const App = () => {
  return (
    <ItemContextProvider>
      <Main></Main>
    </ItemContextProvider>
  );
};

export default App;
