import classes from "./date.module.css";

export default function Date(props) {
  const itTimeHour = parseInt(props.itTime / 60);
  const itTimeMinute = props.itTime % 60;
  const studyTimeHour = parseInt(props.studyTime / 60);
  const studyTimeMinute = props.studyTime % 60;
  return (
    <div className={classes.wrap}>
      <div className={classes.dateWrap}>
        <p>{props.date}</p>
      </div>
      <div className={classes.comment_time_Wrap}>
        <div className={classes.comment_Wrap}>
          <p>{props.comment}</p>
        </div>
        <div className={classes.time_Wrap}>
          <div>
            <p>
              {isNaN(itTimeHour) ? "" : "ITTIME : " + itTimeHour + "H"}{" "}
              {itTimeMinute ? itTimeMinute + "M" : ""}
            </p>
          </div>
          <div>
            <p>
              {isNaN(studyTimeHour) ? "" : "STUDYTIME : " + studyTimeHour + "H"}{" "}
              {studyTimeMinute ? studyTimeMinute + "M" : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
