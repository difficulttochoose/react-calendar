import React from "react";
import Week from "../Week";
import { getWeeksInMonth, getWeek, format } from "date-fns";
import styles from "./Month.module.scss";
import PropTypes from "prop-types";

function Month(props) {
  const { year, month } = props;
  const date = new Date(year, month);
  const firstWeek = getWeek(date);
  const weeksInMonth = getWeeksInMonth(date);
  const weeks = [];
  for (let i = firstWeek; i < firstWeek + weeksInMonth; ++i) {
    weeks.push(<Week key={i} week={i} />);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        {format(month, "MMMM")} {year}
      </div>
      <div className={styles.tableWrapper}>
        <div className={styles.weekDaysNames}>
          <div>s</div>
          <div>m</div>
          <div>t</div>
          <div>w</div>
          <div>t</div>
          <div>f</div>
          <div>s</div>
        </div>
        <div>{weeks}</div>
      </div>
    </div>
  );
}

Month.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

export default Month;
