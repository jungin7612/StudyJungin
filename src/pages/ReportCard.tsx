import classes from "./ReportCard.module.css";
import ReportCardHeader from "../components/reportcard/ReportCardHeader";

export default function ReportCardPAge() {
  return (
    <div className={classes.wrap}>
      <p className="chapter">Chapter 2</p>
      <ReportCardHeader></ReportCardHeader>
    </div>
  );
}
