import React, { Component } from "react";
import Month from "./Month";
import Day from "./Day";
import { format } from "date-fns";
import { getYear, getMonth } from "date-fns";

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
      <div>
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
