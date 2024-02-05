import React from "react";

const Concert = ({ name, date }) => {
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(date).toLocaleString("cs-CZ", options);
  };
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <h3>{name}</h3>
      <div>{formatDate(date)}</div>
    </div>
  );
};

export default Concert;
