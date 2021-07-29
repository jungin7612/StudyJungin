import classes from "./monthList.module.css";

export default function MonthList({ posts, setPosts }) {
  const getTodos = (e) => {
    const data = {
      id: e.target.id,
    };
    fetch("https://studyapi.jungin.me/api/getdata", {
      method: "POST",
      body: JSON.stringify(data), //
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        datatype: "text",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response) {
          setPosts(response);
        } else {
          alert("something wrong");
        }
      });
  };
  return (
    <ul className={classes.monthList}>
      <li onClick={getTodos} id="2021-07">
        2021 JUL
      </li>
      <li onClick={getTodos} id="2021-06">
        2021 JUN
      </li>
    </ul>
  );
}