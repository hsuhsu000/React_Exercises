import { useContext } from "react";
import { FirstContext } from "../FirstContext";

const Child2 = () => {
  const { address } = useContext(FirstContext);
  return (
    <>
      <h1>Child2</h1>
      <h2>Data from FirstContext address - {address}</h2>
    </>
  );
};

export default Child2;
