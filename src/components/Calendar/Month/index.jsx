import React from "react";
import Week from "../Week";
import { format, startOfMonth } from "date-fns";
import { eachWeekOfInterval, endOfMonth } from "date-fns/esm";
import styles from "./Month.module.scss";
import PropTypes from "prop-types";

function Month(props) {
  const { date } = props;

  const weeks = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  }).map((d) => <Week key={d} date={d} />);

  return (
    <table className={styles.wrapper}>
      <caption className={styles.name}>{format(date, "MMMM yyyy")}</caption>
      <thead className={styles.tableWrapper}>
        <tr className={styles.weekDaysNames}>
          <th>s</th>
          <th>m</th>
          <th>t</th>
          <th>w</th>
          <th>t</th>
          <th>f</th>
          <th>s</th>
        </tr>
      </thead>
      <tbody>{weeks}</tbody>
    </table>
  );
}

Month.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Month;
