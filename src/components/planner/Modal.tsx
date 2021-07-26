import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./modal.css";
import Task from "./Task";
import TodoList from "./TodoList";

export default function Modal(props: any) {
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [todos, setTodos] = useState([]);

  const passwordRef: any = useRef();
  const dateRef: any = useRef();
  const commentRef: any = useRef();
  const itTimeRef: any = useRef();
  const studyTimeRef: any = useRef();
  const transportInfo = (event: any) => {
    event.preventDefault();
    const enteredPassword = passwordRef.current.value;
    const enteredDate = dateRef.current.value;
    const enteredComment = commentRef.current.value;
    const enteredItTime = itTimeRef.current.value;
    const enteredstudyTime = studyTimeRef.current.value;
    const data = {
      password: enteredPassword,
      date: enteredDate,
      comment: enteredComment,
      itTime: enteredItTime,
      studyTime: enteredstudyTime,
      todos: todos,
    };
    fetch("http://studyapi.jungin.me/api/post", {
      method: "POST",
      body: JSON.stringify(data), //
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        datatype: "text",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((response: any) => {
        console.log(response);
        if (response) {
          if (!response.auth) {
            alert("success");
          } else {
            alert("꺼졍");
          }
        } else {
          console.log("fail");
        }
      });
  };
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header className="modal-header">
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main className="modaldesc">
            <input
              id="password"
              type="password"
              ref={passwordRef}
              placeholder="password"
            />
            <input type="date" ref={dateRef} />
            <input type="text" placeholder="comment" ref={commentRef} />
            <input type="number" placeholder="IT total time" ref={itTimeRef} />
            <input
              type="number"
              placeholder="Study total time"
              ref={studyTimeRef}
            />
            <TodoList setTodos={setTodos} todos={todos} />
            <Task
              inputText1={inputText1}
              inputText2={inputText2}
              todos={todos}
              setTodos={setTodos}
              setInputText1={setInputText1}
              setInputText2={setInputText2}
            />
          </main>
          <footer>
            <button className="close" onClick={transportInfo}>
              {" "}
              ok{" "}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
