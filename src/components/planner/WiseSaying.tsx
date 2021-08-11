import classes from "./WiseSaying.module.css";

export default function WiseSaying() {
  function getDiff() {
    const currDay = new Date();
    const examDay = new Date("November 17, 2022");

    const diffDays = Math.floor(
      (examDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diffDays;
  }
  return (
    <div className={classes.wiseSayingWrap}>
      <div className={classes.ddayContainer}>
        <p>D - {getDiff() + 1}</p>
      </div>
      <div className={classes.wiseSayingContainer}>
        <p>DON'T HAVE TO BE GREAT</p>
        <p>BUT HAVE TO START</p>
        <p>TO BE GREAT</p>
      </div>
    </div>
  );
}
