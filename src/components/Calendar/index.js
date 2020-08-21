import React, { Component } from "react";
import Month from "./Month";
import Day from "./Day";
import styles from "./Calendar.module.scss";

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
      <div className={styles.wrapper}>
        <Day date={currentDate} />
        <Month date={currentDate} />
      </div>
    );
  }
}

export default Calendar;
