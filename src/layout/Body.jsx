import React from "react";
import Card from "../components/Card";
const fruits = [
  {
    id: 1,
    price: 10,
    name: "Banana",
    description: "fresh banana from myanmar",
  },
  {
    id: 2,
    price: 20,
    name: "Apple",
    description: "fresh Apple from myanmar",
  },
  {
    id: 3,
    price: 30,
    name: "Durian",
    description: "fresh banana from myanmar",
  },
  {
    id: 4,
    price: 40,
    name: "Orange",
    description: "fresh Orange from myanmar",
  },
  {
    id: 5,
    price: 50,
    name: "Lemon",
    description: "fresh Lemon from myanmar",
  },
];
const Body = () => {
  return (
    <section>
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit}></Card>
      ))}
    </section>
  );
};

export default Body;
