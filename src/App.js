import "./App.css";
import Header from "./My_component/Header";
import { Footer } from "./My_component/Footer";
import { Todos } from "./My_component/Todos";
import { AddTodo } from "./My_component/AddTodo";
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I an ondelete of todo", todo);
    // deleting not work in thsi manner
    // let index=todo.indexof(todo);
    // todo.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo!", title, desc);
    let s_no;
    if (todos.length == 0) {
      let s_on = 0;
    } else {
      s_no = todos[todos.length - 1].s_no + 1;
    }
    // let s_no= todos[todos.length-1].s_on +1;
    const myTodo = {
      s_no: s_no,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="MyTodosList" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
  
}

export default App;
