import React from "react";

function Day(props) {
  const { weekDay, date } = props;
  return (
    <div>
      <p>{weekDay}</p>
      <div>{date}</div>
    </div>
  );
}

export default Day;
