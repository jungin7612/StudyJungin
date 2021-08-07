import classes from "./planImage.module.css";
import Date from "./planImage/Date";
import TaskList from "./planImage/TaskList";

export default function PlanImage(props: any) {
 
  const upHandler = () => {
    if (props.status < props.posts.length - 1) {
      props.setstatus(props.status + 1);
    } else {
      props.setstatus(0);
    }
  };
  const downHandler = () => {
    if (props.status > 0) {
      props.setstatus(props.status - 1);
    } else {
      props.setstatus(props.posts.length-1)
    }
  };

  const todos = props?.posts[props.status]?.todos;

  const date = props?.posts[props.status]?.date.split("T")[0];
  const comment = props?.posts[props.status]?.comment;
  const itTime = props?.posts[props.status]?.itTime;
  const studyTime = props?.posts[props.status]?.studyTime;
  return (
    <div className={classes.planimgContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.219"
        height="30.109"
        viewBox="0 0 26.219 30.109"
      >
        <path
          id="다각형_2"
          data-name="다각형 2"
          d="M15.054,0,30.109,26.218H0Z"
          transform="translate(0 30.109) rotate(-90)"
          fill="#d2d2d2"
          opacity="0.25"
          className={classes.triangle}
          onClick={downHandler}
        />
      </svg>
      <div className={classes.imgContainer}>
        <div className={classes.Wrap}>
          <Date
            date={date}
            comment={comment}
            itTime={itTime}
            studyTime={studyTime}
          ></Date>
          <TaskList todos={todos}></TaskList>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.219"
        height="30.109"
        viewBox="0 0 26.219 30.109"
      >
        <path
          id="다각형_3"
          data-name="다각형 3"
          d="M15.054,0,30.109,26.218H0Z"
          transform="translate(26.219) rotate(90)"
          fill="#d2d2d2"
          opacity="0.25"
          className={classes.triangle}
          onClick={upHandler}
        />
      </svg>
    </div>
  );
}
