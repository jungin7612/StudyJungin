import "./detailTask.css";

export default function DetailTask(props: any) {
  return (
    <div className="detailTask_Wrap">
      <div className="subject">
        <p>{props.subject}</p>
      </div>
      <div className="check_Wrap">
        <p>{props.task}</p>
        <input type="checkbox" defaultChecked={props.completed} />
      </div>
    </div>
  );
}
