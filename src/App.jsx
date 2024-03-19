import FirstContextProvider from "./FirstContext";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";

function App() {
  return (
    <>
      <h1>These are three components Child1,2,3</h1>
      <Child1></Child1>

      <h1>==================</h1>
      <h1>Using Reducer</h1>
      <FirstContextProvider>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </FirstContextProvider>
    </>
  );
}

export default App;
