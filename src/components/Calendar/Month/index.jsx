import React from "react";
import Week from "../Week";
import { getWeeksInMonth, getWeek, format } from "date-fns";
import styles from "./Month.module.css";
import classNames from "classnames";

function Month(props) {
  const { year, month } = props;
  const date = new Date(year, month);
  const firstWeek = getWeek(date);
  const weeksInMonth = getWeeksInMonth(date);
  const weeks = [];
  for (let i = firstWeek; i < firstWeek + weeksInMonth; ++i) {
    weeks.push(<Week key={i} week={i} />);
    console.log("WEEKS", weeks);
  }
  return (
    <div className={classNames([styles.wrapper])}>
      <div className={classNames([styles.name])}>
        {format(month, "MMMM")} {year}
      </div>
      <div className={classNames([styles.tableWrapper])}>
        <div className={classNames([styles.weekDaysNames])}>
          <div>s</div>
          <div>m</div>
          <div>t</div>
          <div>w</div>
          <div>t</div>
          <div>f</div>
          <div>s</div>
        </div>
        <div>{weeks}</div>
      </div>
    </div>
  );
}

export default Month;
