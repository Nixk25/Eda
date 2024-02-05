import React from "react";

const PrevConc = ({ name, date }) => {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("cs-CZ", options).format(
      new Date(date)
    );
    return formattedDate;
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full">
        <h3>{name}</h3>
        <div>{formatDate(date)}</div>
      </div>
    </div>
  );
};

export default PrevConc;
