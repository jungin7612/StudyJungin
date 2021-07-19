import React from "react";
import { useRef } from "react";
import "./modal.css";

export default function Modal(props: any) {
  const passwordRef: any = useRef();
  const transportInfo = (event: any) => {
    event.preventDefault();
    const enterdPasswrod = passwordRef.current.value;
    const data = {
      password: enterdPasswrod,
    };
    fetch("https://jungin.me/", {
      method: "POST",
      body: JSON.stringify(data), //
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        datatype: "text",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((response: any) => {
        if (response.status) {
          console.log("Success");
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
            <input type="password" ref={passwordRef} />
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
