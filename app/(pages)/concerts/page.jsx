"use client";

import React, { useState, useEffect } from "react";
import Concert from "@/components/Concert";
import PrevConc from "@/components/PrevConc";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Concerts = () => {
  const { status } = useSession();

  const [concerts, setConcerts] = useState([]);
  const [prevConcerts, setPrevConcerts] = useState([]);

  useEffect(() => {
    const getConcerts = async () => {
      try {
        const res = await fetch(`/api/concerts`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("failed to fetch");
        }

        let data = await res.json();

        data.concerts.sort((a, b) => new Date(a.date) - new Date(b.date));

        setConcerts(data.concerts);
      } catch (err) {
        console.log("Error loading concerts", err);
      }
    };

    getConcerts();

    const getPrevConcerts = async () => {
      try {
        const res = await fetch(`/api/prevConcerts`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("failed to fetch");
        }

        let data = await res.json();

        await data.prevConcerts.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setPrevConcerts(data.prevConcerts);
      } catch (err) {
        console.log("Error loading concerts", err);
      }
    };

    getPrevConcerts();
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
          {concerts.map((concert, i) => {
            return (
              <Concert
                key={i}
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
          {prevConcerts.map((concert, i) => {
            return <PrevConc key={i} name={concert.name} date={concert.date} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Concerts;
