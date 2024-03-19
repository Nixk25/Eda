import Link from "next/link";
import React from "react";
import RemoveBtn from "./RemoveBtn";
import UpdateBtn from "./UpdateBtn";

const Concert = ({ name, date, time, id }) => {
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleString("cs-CZ", options);
  };
  return (
    <div className="flex flex-col items-center justify-between w-full text-center group sm:flex-row ">
      <h3 className="order-2 mb-3 sm:order-1 ">{name}</h3>
      <div className="flex order-1 gap-1 font-bold group-hover:hidden sm:oder-2">
        <div className="font-bold ">{formatDate(date)}</div>
        <span>v {time}</span>
      </div>
      <div className="order-1 hidden gap-3 group-hover:flex sm:order-2">
        <Link href={`/updateConcert/${id}`}>
          <UpdateBtn />
        </Link>
        <RemoveBtn id={id} />
      </div>
    </div>
  );
};

export default Concert;
