import React from "react";
import styles from "./Day.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

function Day(props) {
  const { weekDay, date } = props;
  console.log("date day", typeof date);
  return (
    <div className={classNames([styles.wrapper])}>
      <p className={classNames([styles.dayName])}>{weekDay}</p>
      <div className={classNames([styles.date])}>{date}</div>
    </div>
  );
}

Day.propTypes = {
  weekDay: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
};

export default Day;
