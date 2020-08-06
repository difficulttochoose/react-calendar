import React from "react";
import Week from "../Week";
import { getWeeksInMonth, getWeek, format } from "date-fns";

function Month(props) {
  const { year, month } = props;
  const date = new Date(year, month);
  const firstWeek = getWeek(date);
  const weeksInMonth = getWeeksInMonth(date);
  const weeks = [];
  for (let i = firstWeek; i < firstWeek + weeksInMonth; ++i) {
    weeks.push(<Week key={i} week={i} />);
    console.log("WEEKS", weeks);
  }
  return (
    <table>
      <caption>
        {format(month, "MMMM")} {year}
      </caption>
      <thead>
        <tr>
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

export default Month;
