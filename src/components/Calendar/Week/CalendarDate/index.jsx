import React from "react";
import styles from "./CalendarDate.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

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

CalendarDate.propTypes = {
  date: PropTypes.number.isRequired,
  isCurrentMonthDate: PropTypes.bool.isRequired,
  isCurrent: PropTypes.bool.isRequired,
};

export default CalendarDate;
