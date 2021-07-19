import classes from "./planImage.module.css";

export default function PlanImage() {
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
        />
      </svg>
      <div className={classes.imgContainer}></div>
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
        />
      </svg>
    </div>
  );
}
