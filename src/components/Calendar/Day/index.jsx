import React from "react";
import styles from "./Day.module.scss";
import PropTypes from "prop-types";
import format from "date-fns/format";

function Day(props) {
  const { date } = props;
  return (
    <div className={styles.wrapper}>
      <p className={styles.dayName}>{format(date, "EEEE")}</p>
      <div className={styles.date}>{format(date, "d")}</div>
    </div>
  );
}

Day.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Day;
