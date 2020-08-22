import React from "react";
import CalendarDate from "./CalendarDate";
import { startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";
import styles from "./Week.module.scss";
import PropTypes from "prop-types";

function Week(props) {
  const { date } = props;

  const weekDates = eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date),
  }).map((d) => <CalendarDate key={`${d}${date}`} date={d} />);

  return <tr className={styles.week}>{weekDates}</tr>;
}

Week.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Week;
