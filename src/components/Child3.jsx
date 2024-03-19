import { useContext } from "react";
import { FirstContext } from "../FirstContext";

const Child3 = () => {
  const { userName } = useContext(FirstContext);
  return (
    <>
      <h1>Child3</h1>
      <h2>Data from FirstContext username - {userName}</h2>
    </>
  );
};

export default Child3;
