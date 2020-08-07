import React from "react";
import styles from "./Day.module.css";
import classNames from "classnames";

function Day(props) {
  const { weekDay, date } = props;
  return (
    <div className={classNames([styles.wrapper])}>
      <p className={classNames([styles.dayName])}>{weekDay}</p>
      <div className={classNames([styles.date])}>{date}</div>
    </div>
  );
}

export default Day;
