import { Link } from "react-router-dom";
import classes from "./Mainnav.module.css";

export default function Mainnav() {
  return (
    <nav className={classes.mainNav}>
      <ul>
        <li>
          <Link to="/">WhoAmI</Link>
        </li>
        <li>
          <Link to="/reportcard">My Report Card</Link>
        </li>
        <li>
          <Link to="/dailyplan">My Daily Planer</Link>
        </li>
      </ul>
    </nav>
  );
}
