"use client";

import React from "react";
import concerts from "@/data/concerts";
import Concert from "@/components/Concert";
import prevConc from "@/data/prevConc";
import PrevConc from "@/components/PrevConc";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Concerts = () => {
  const { status } = useSession();

  return (
    <section className=" mt-[200px] flex justify-center items-center">
      <div className="container">
        <h2 className="pageText">Nadcházející koncerty </h2>
        {status === "authenticated" && (
          <Button className="mb-10">Přidat koncert</Button>
        )}
        <div className="flex flex-col gap-10 sm:gap-5 ">
          {concerts.map((concert, i) => {
            return <Concert key={i} name={concert.name} date={concert.date} />;
          })}
        </div>
        <h2 className="mt-10 pageText">Proběhlé</h2>
        {status === "authenticated" && (
          <Button className="mb-10">Přidat koncert</Button>
        )}
        <div className="flex flex-col gap-10 sm:gap-5">
          {prevConc.map((concert, i) => {
            return <PrevConc key={i} name={concert.name} date={concert.date} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Concerts;
