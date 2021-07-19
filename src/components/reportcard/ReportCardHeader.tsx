import classes from "./header.module.css";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function ReportCardHeader() {
  return (
    <FadeIn className={classes.wrap}>
      <p> 성적 궁금하면 연락 ~</p>
    </FadeIn>
  );
}
