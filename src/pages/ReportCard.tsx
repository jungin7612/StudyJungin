import classes from "./ReportCard.module.css";
import DimigoReport from "../components/reportcard/DimigoReport";
import CSATReport from "../components/reportcard/CSAT";
import { useState } from "react";

export default function ReportCardPAge() {
  const [reportStatus, setReportStatus] = useState("내신");
  const setdimigo = () => {
    setReportStatus("내신");
  };
  const setCSAT = () => {
    setReportStatus("모의고사");
  };
  return (
    <div className={classes.wrap}>
      <p className="chapter">Chapter 2</p>
      <div className={classes.text_Wrap}>
        <h1 onClick={setdimigo}>내신</h1>
        <h1 onClick={setCSAT}>모의고사</h1>
      </div>
      <div className={classes.report_Wrap}>
        {reportStatus === "내신" ? <DimigoReport /> : <CSATReport />}
      </div>
    </div>
  );
}
