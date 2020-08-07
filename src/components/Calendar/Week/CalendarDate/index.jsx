import React from "react";
import styles from "./CalendarDate.module.scss";
import classNames from "classnames";

function CalendarDate(props) {
  const { date, isCurrentMonthDate, isCurrent } = props;
  return (
    <div
      className={classNames({
        [styles.thisMonthDate]: isCurrentMonthDate && !isCurrent,
        [styles.otherMonthDate]: !isCurrentMonthDate,
        [styles.current]: isCurrent,
      })}
    >
      {date}
    </div>
  );
}

export default CalendarDate;
