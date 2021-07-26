import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            todos={todos}
            text1={todo.text1}
            text2={todo.text2}
          />
        ))}
      </ul>
    </div>
  );
}
