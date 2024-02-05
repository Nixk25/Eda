import React from "react";
import concerts from "@/data/concerts";
import Concert from "@/components/Concert";
import prevConc from "@/data/prevConc";
import PrevConc from "@/components/PrevConc";
export const metadata = {
  title: "TNRB | Koncerty",
  description: "concerts of starting music group Taková normální rodinka band",
};

const Concerts = () => {
  return (
    <section className=" mt-[100px] flex justify-center items-center">
      <div className="container">
        <h2 className="pageText">Nadcházející koncerty </h2>
        <div className="flex flex-col gap-3 ">
          {concerts.map((concert, i) => {
            return <Concert key={i} name={concert.name} date={concert.date} />;
          })}
        </div>
        <h2 className="pageText mt-10">Minulé</h2>
        <div className="flex flex-col gap-3">
          {prevConc.map((concert, i) => {
            return <PrevConc key={i} name={concert.name} date={concert.date} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Concerts;
