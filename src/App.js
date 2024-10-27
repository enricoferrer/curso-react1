import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tasklist from "./components/Tasklist/Tasklist";

let idAcc = 0;
const generatedId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generatedId(),
      title,
      state,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist
          title="Pendente"
          onAddTask={addTask}
          taskState={"Pendente"}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask = {deleteTask}
        />
        <Tasklist
          title="Fazendo"
          onAddTask={addTask}
          taskState={"Fazendo"}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask = {deleteTask}
        />
        <Tasklist
          title="Concluido"
          onAddTask={addTask}
          taskState={"Concluido"}
          tasks={tasks.filter((t) => t.state === "Concluido")}
          onTaskUpdate={updateTask}
          onDeleteTask = {deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
