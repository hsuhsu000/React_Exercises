import { useContext } from "react";
import { FirstContext } from "../FirstContext";

const Child3 = () => {
  const { userName, num, setNum } = useContext(FirstContext);
  return (
    <>
      <h1>Child3</h1>
      <h2>Data from FirstContext username - {userName}</h2>
      <h1>{num}</h1>
      <button onClick={() => setNum((prev) => prev + 1)}>+</button>
      <button onClick={() => setNum((prev) => prev - 1)}>-</button>
    </>
  );
};

export default Child3;
