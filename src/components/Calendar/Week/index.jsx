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
import styles from "./Week.module.css";
import classNames from "classnames";

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
        date={getDate(weekDay)}
        isCurrentMonthDate={isThisMonth(weekDay)}
        isCurrent={isToday(weekDay)}
      />
    );
    weekDay = addDays(weekDay, 1);
  }
  return <div className={classNames([styles.week])}>{calendarDates}</div>;
}

export default Week;
