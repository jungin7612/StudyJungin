import classes from "./taskList.module.css";
import DetailTask from "./DetailTask";

export default function TaskList(props: any) {
  const todos = props.todos;
  if (todos) {
    return (
      <div className={classes.task_Wrap}>
        {todos?.map((todo: any) => {
          return (
            <DetailTask
              subject={todo.text1}
              task={todo.text2}
              completed={todo.completed}
              key= {Math.random() * 1000}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className={classes.noData_Wrap}>
      <h1>No Data</h1>
    </div>
  );
}
