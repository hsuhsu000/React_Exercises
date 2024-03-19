import { useState, useEffect } from "react";

function App() {
  const [id, setid] = useState("");
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState({});
  const getData = async (e) => {
    e.preventDefault();
    if (id < 1) {
      setError(true);
      return;
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    setError(false);
    setTodos(data);
    setid("");
  };

  return (
    <>
      <form onSubmit={getData}>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setid(e.target.value);
          }}
        ></input>
        <button type="submit">Get Data</button>
      </form>
      <div>
        {error && <h1>Please enter a valid number.(e.g 1,2,3,...)</h1>}
        {todos && (
          <div>
            <h3>id - {todos.id}</h3>
            <h3>title - {todos.title}</h3>
            <h3>userId - {todos.userId}</h3>
            <h3>completed - {todos.completed ? <span>Completed</span> : <span>Not Completed</span>}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
