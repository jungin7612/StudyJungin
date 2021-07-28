import { useRef } from "react";

export default function Task({
  setInputText1,
  todos,
  setTodos,
  inputText1,
  setInputText2,
  inputText2,
}) {
  const inputTextHandler1 = (e) => {
    setInputText1(e.target.value);
  };
  const inputTextHandler2 = (e) => {
    setInputText2(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text1: inputText1,
        text2: inputText2,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText1("");
    setInputText2("");
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitHandler(e)
      inputEl.current.focus()
    }
  }
  const inputEl = useRef(null)
  return (
    <div className="TaskContainer">
      <input value={inputText1} onChange={inputTextHandler1} type="text" onKeyPress={onKeyPress} ref={inputEl} />
      <input value={inputText2} onChange={inputTextHandler2} type="text" onKeyPress={onKeyPress} />
      <button
        onClick={submitHandler}
        className="plus-button plus-button--small"
      ></button>
    </div>
  );
}
