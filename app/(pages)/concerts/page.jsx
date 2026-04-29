"use client";

import React, { useState, useEffect } from "react";
import Concert from "@/components/Concert";
import PrevConc from "@/components/PrevConc";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getConcertDateTime, isPastConcert } from "@/lib/concertTime";

const Concerts = () => {
  const { status } = useSession();

  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);

  useEffect(() => {
    const getConcerts = async () => {
      try {
        const res = await fetch(`/api/concerts`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("failed to fetch");
        }

        const data = await res.json();
        const all = data.concerts || [];

        const upcomingList = all
          .filter((c) => !isPastConcert(c))
          .sort((a, b) => getConcertDateTime(a) - getConcertDateTime(b));

        const pastList = all
          .filter(isPastConcert)
          .sort((a, b) => getConcertDateTime(b) - getConcertDateTime(a));

        setUpcoming(upcomingList);
        setPast(pastList);
      } catch (err) {
        console.log("Error loading concerts", err);
      }
    };

    getConcerts();
  }, []);

  return (
    <section className=" mt-[200px] flex justify-center items-center">
      <div className="container">
        <h2 className="pageText">Nadcházející koncerty </h2>
        <div className="flex items-center justify-center sm:justify-start">
          {status === "authenticated" && (
            <Link href="/addNewConcert">
              <Button className="mb-10">Přidat koncert</Button>
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-10 sm:gap-5 ">
          {upcoming.map((concert) => {
            return (
              <Concert
                key={concert._id}
                id={concert._id}
                name={concert.name}
                date={concert.date}
                time={concert.time}
              />
            );
          })}
        </div>
        <h2 className="mt-10 pageText">Proběhlé</h2>

        <div className="flex flex-col gap-10 sm:gap-5">
          {past.map((concert) => {
            return (
              <PrevConc
                key={concert._id}
                name={concert.name}
                date={concert.date}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Concerts;
