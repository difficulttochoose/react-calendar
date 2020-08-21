import React from "react";
import CalendarDate from "./CalendarDate";
import { startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";
import styles from "./Week.module.scss";
import PropTypes from "prop-types";

function Week(props) {
  const { weekStart } = props;

  const weekDates = eachDayOfInterval({
    start: startOfWeek(weekStart),
    end: endOfWeek(weekStart),
  }).map((i) => <CalendarDate key={`${i}${weekStart}`} date={i} />);

  return <tr className={styles.week}>{weekDates}</tr>;
}

Week.propTypes = {
  weekStart: PropTypes.instanceOf(Date).isRequired,
};

export default Week;
