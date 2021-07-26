import classes from "./DailyPlanner.module.css";
import WiseSaying from "../components/planner/WiseSaying";
import ProgressBar from "../components/planner/ProgressBar";
import MonthList from "../components/planner/MonthList";
import PlanImage from "../components/planner/PlanImage";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useState } from "react";

export default function DailyPlannerPAge() {
  const [posts, setPosts] = useState([]);
  return (
    <div className={classes.wrap}>
      <p className="chapter">Chapter 3</p>
      <FadeIn>
        <WiseSaying />
        <ProgressBar></ProgressBar>
      </FadeIn>
      <div className={classes.planContainer}>
        <MonthList posts={posts} setPosts={setPosts}></MonthList>
        <PlanImage posts={posts}></PlanImage>
      </div>
    </div>
  );
}
