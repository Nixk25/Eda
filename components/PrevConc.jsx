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
      <div className="flex flex-col text-center sm:flex-row justify-between items-center w-full">
        <h3 className="mb-3">{name}</h3>
        <div className="font-bold">{formatDate(date)}</div>
      </div>
    </div>
  );
};

export default PrevConc;
