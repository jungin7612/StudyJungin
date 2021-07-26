export default function Task({
  setInputText1,
  todos,
  setTodos,
  inputText1,
  setInputText2,
  inputText2,
}) {
  const inputTextHandler1 = (e) => {
    console.log(e.target.value);
    setInputText1(e.target.value);
  };
  const inputTextHandler2 = (e) => {
    console.log(e.target.value);
    setInputText2(e.target.value);
  };
  const submitHandelr = (e) => {
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

  return (
    <div className="TaskContainer">
      <input value={inputText1} onChange={inputTextHandler1} type="text" />
      <input value={inputText2} onChange={inputTextHandler2} type="text" />
      <button
        onClick={submitHandelr}
        className="plus-button plus-button--small"
      ></button>
    </div>
  );
}
