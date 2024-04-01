// import React from "react";
// import Main from "./layout/Main";
// import ItemContextProvider from "./store/itemContext";
// const App = () => {
//   return (
//     <ItemContextProvider>
//       <Main></Main>
//     </ItemContextProvider>
//   );
// };

// export default App;

import useToggle from "./hooks/useToggle";
function App() {
  const [isShow, toggle] = useToggle();
  return (
    <section>
      <button onClick={toggle}>{isShow ? "hide" : "show"}</button>
      {isShow && <h1>Component is Showing</h1>}
    </section>
  );
}

export default App;
