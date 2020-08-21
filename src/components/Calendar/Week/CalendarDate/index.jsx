import React from "react";
import styles from "./CalendarDate.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import { getDate, isThisMonth, isToday } from "date-fns";

function CalendarDate(props) {
  const { date } = props;
  const currentMonth = isThisMonth(date);
  const currentDate = isToday(date);
  return (
    <td
      className={classNames({
        [styles.thisMonthDate]: currentMonth,
        [styles.otherMonthDate]: !currentMonth,
        [styles.thisMonthDate_current]: currentDate,
      })}
    >
      {getDate(date)}
    </td>
  );
}

CalendarDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarDate;
