import classes from "./WhoAMI.module.css";
import Profile from "../components/whoami/MainProfile";

export default function WhoamIPAge() {
  return (
    <div className={classes.wrap}>
      <p className="chapter">Chapter 1</p>
      <div className={classes.whoamiContainer}>
        <Profile />
      </div>
      <footer className={classes.footer}>
        <p>· HELLO? WELCOME! · </p>
      </footer>
    </div>
  );
}
