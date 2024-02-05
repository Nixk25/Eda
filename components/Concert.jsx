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
    <div className="flex flex-col text-center sm:flex-row justify-between items-center w-full ">
      <h3 className="mb-3">{name}</h3>
      <div className="font-bold ">{formatDate(date)}</div>
    </div>
  );
};

export default Concert;
