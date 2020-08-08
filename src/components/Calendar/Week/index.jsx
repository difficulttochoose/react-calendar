import React from "react";
import CalendarDate from "./CalendarDate";
import {
  startOfWeek,
  endOfWeek,
  addDays,
  getDate,
  getDay,
  setWeek,
  isThisMonth,
  isToday,
} from "date-fns";
import styles from "./Week.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

function Week(props) {
  const { week } = props;
  const date = new Date();
  let weekDate = setWeek(date, week);
  let weekDay = startOfWeek(weekDate);
  const startDate = getDay(weekDay);
  const endDate = getDay(endOfWeek(weekDate));
  const calendarDates = [];
  for (let i = startDate; i <= endDate; ++i) {
    calendarDates.push(
      <CalendarDate
        key={`${i}${week}`}
        date={getDate(weekDay)}
        isCurrentMonthDate={isThisMonth(weekDay)}
        isCurrent={isToday(weekDay)}
      />
    );
    weekDay = addDays(weekDay, 1);
  }
  return <div className={classNames([styles.week])}>{calendarDates}</div>;
}

Week.propTypes = {
  week: PropTypes.number.isRequired,
};

export default Week;
