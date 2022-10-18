import "./App.css";
import React from "react";

const todos = [
  { text: "Crear un Todo", completed: false },
  { text: "Intro react", completed: false },
  { text: "Hacer ejercicio", completed: false },
];

function App() {
  return (
    <React.Fragment>
    {/*  <TodoCounter />
      
      <TodoSearch /> */}
      <h2> Has completado 2 de 3 TODOs</h2>
      <input placeholder="digita aqui" />

      {/* <TodoList>
        
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </TodoList>
      <createTodoButton />  */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
