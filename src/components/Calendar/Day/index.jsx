import React from "react";
import styles from "./Day.module.scss";
import PropTypes from "prop-types";

function Day(props) {
  const { weekDay, date } = props;
  return (
    <div className={styles.wrapper}>
      <p className={styles.dayName}>{weekDay}</p>
      <div className={styles.date}>{date}</div>
    </div>
  );
}

Day.propTypes = {
  weekDay: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Day;
