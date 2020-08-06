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

function Week(props) {
  const { week } = props;
  const date = new Date();
  let weekDate = setWeek(date, week);
  console.log("weekDate", weekDate);
  let weekDay = startOfWeek(weekDate);
  const startDate = getDay(weekDay);
  const endDate = getDay(endOfWeek(weekDate));
  console.log("weekDay", weekDay);
  const calendarDates = [];
  for (let i = startDate; i <= endDate; ++i) {
    console.log("weekDay", weekDay);
    console.log("startDate", startDate);
    calendarDates.push(
      <CalendarDate
        date={getDate(weekDay)}
        isCurrentMonthDate={isThisMonth(weekDay)}
        isCurrent={isToday(weekDay)}
      />
    );
    weekDay = addDays(weekDay, 1);
  }
  return <tr>{calendarDates}</tr>;
}

export default Week;
