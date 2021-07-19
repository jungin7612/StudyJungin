import classes from "./DailyPlanner.module.css";
import WiseSaying from "../components/planner/WiseSaying";
import ProgressBar from "../components/planner/ProgressBar";
import MonthList from "../components/planner/MonthList";
import PlanImage from "../components/planner/PlanImage";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function DailyPlannerPAge() {
  return (
    <div className={classes.wrap}>
      <p className="chapter">Chapter 3</p>
      <FadeIn>
        <WiseSaying />
        <ProgressBar></ProgressBar>
      </FadeIn>
      <div className={classes.planContainer}>
        <MonthList></MonthList>
        <PlanImage></PlanImage>
      </div>
    </div>
  );
}
