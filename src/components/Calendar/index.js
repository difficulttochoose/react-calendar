import React, { Component } from "react";
import Month from "./Month";
import Day from "./Day";
import { format } from "date-fns";
import { getYear, getMonth } from "date-fns";
import styles from "./Calendar.module.css";
import classNames from "classnames";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    return (
      <div className={classNames([styles.wrapper])}>
        <Day
          weekDay={format(currentDate, "EEEE")}
          date={format(currentDate, "d")}
        />
        <Month year={getYear(currentDate)} month={getMonth(currentDate)} />
      </div>
    );
  }
}

export default Calendar;
