import classes from "./todo.module.css";
import React from "react";

export default function Todo({ text1, text2, todos, setTodos, todo }) {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={classes.todo}>
      <li className={classes.taskName}>{text1}</li>
      <li
        className={`${classes.detailDesc} ${
          todo.completed ? classes.completed : ""
        }`}
      >
        {text2}
      </li>
      <button onClick={completeHandler} className={classes.completeBtn}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className={classes.trashBtn}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
