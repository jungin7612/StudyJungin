import classes from "./monthList.module.css";

export default function MonthList() {
  return (
    <ul className={classes.monthList}>
      <li>2021 DEC</li>
      <li>2021 NOV</li>
      <li>2021 OCT</li>
      <li>2021 SEP</li>
      <li>2021 AUG</li>
      <li>2021 JUL</li>
    </ul>
  );
}
