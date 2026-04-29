"use client";

import React, { useEffect, useState } from "react";
import { getConcertDateTime, isPastConcert } from "@/lib/concertTime";

const Countdown = () => {
  const [concertDateTime, setConcertDateTime] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [concert, setConcert] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const getConcertData = async () => {
      try {
        const res = await fetch(`/api/concerts`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("failed to fetch");
        }

        const data = await res.json();
        const upcoming = (data.concerts || [])
          .filter((c) => !isPastConcert(c))
          .sort((a, b) => getConcertDateTime(a) - getConcertDateTime(b));

        const next = upcoming[0];
        if (next) {
          setConcert(next);
          setConcertDateTime(getConcertDateTime(next));
        } else {
          setConcert(null);
          setConcertDateTime(undefined);
        }
      } catch (err) {
        console.log("Error loading concerts", err);
      }
    };

    getConcertData();
  }, [reloadKey]);

  useEffect(() => {
    if (!concertDateTime) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(concertDateTime) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    const timer = setInterval(() => {
      const next = calculateTimeLeft();
      if (next) {
        setTimeLeft(next);
      } else {
        clearInterval(timer);
        setTimeLeft(undefined);
        setReloadKey((k) => k + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [concertDateTime]);

  if (!concert) {
    return <div>Žádný nadcházející koncert</div>;
  }

  return (
    <div>
      {timeLeft ? (
        <>
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="font-bold sm-clamp">{concert.name}</h2>
            <div className="flex gap-5">
              <div className="flex flex-col gap-3 title">
                <div className="font-extrabold time" suppressHydrationWarning>
                  {timeLeft.days}{" "}
                </div>
                <span className="text-sm">Dní</span>
              </div>

              <div className="flex flex-col gap-3 title">
                <div className="font-extrabold time" suppressHydrationWarning>
                  {Math.floor(timeLeft.hours)}{" "}
                </div>
                <span className="text-sm">Hodin</span>
              </div>
              <div className="flex flex-col gap-3 title">
                <div className="font-extrabold time" suppressHydrationWarning>
                  {timeLeft.minutes}
                </div>
                <span className="text-sm">Minut</span>
              </div>
              <div className="flex flex-col gap-3 title">
                <div className="font-extrabold time" suppressHydrationWarning>
                  {timeLeft.seconds}
                </div>
                <span className="text-sm">Sekund</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Načítání..."
      )}
    </div>
  );
};

export default Countdown;
