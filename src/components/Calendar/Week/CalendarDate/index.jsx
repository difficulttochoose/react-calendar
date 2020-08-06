import React from "react";
import styles from "./CalendarDate.module.css";
import classNames from "classnames";

function CalendarDate(props) {
  const { date, isCurrentMonthDate, isCurrent } = props;
  return (
    <td
      className={classNames({
        [styles.current]: isCurrent,
        [styles.thisMonthDate]: !isCurrentMonthDate,
      })}
    >
      {date}
    </td>
  );
}

export default CalendarDate;
