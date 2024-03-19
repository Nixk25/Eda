"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const Countdown = () => {
  const [concertDateTime, setConcertDateTime] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [concert, setConcert] = useState([]);
  const router = useRouter();

  const moveConcertToPrevConcerts = async (concert) => {
    const concertDate = new Date(concert.date);
    const now = new Date();

    if (now > concertDate) {
      try {
        const res1 = await fetch(`/api/prevConcerts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: concert.name,
            date: concert.date,
            time: concert.time,
          }),
        });

        if (!res1.ok) {
          throw new Error("failed to move concert to prevConcerts");
        }

        const res2 = await fetch(`/api/concerts?id=${concert._id}`, {
          method: "DELETE",
        });

        if (!res2.ok) {
          throw new Error("failed to delete concert from concerts");
        }
        router.refresh();
      } catch (err) {
        console.log("Error moving concert to prevConcerts", err);
      }
    }
    return;
  };

  const getConcertsDat = async () => {
    try {
      const res = await fetch(`/api/concerts`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("failed to fetch");
      }

      const data = await res.json();

      const updated = await data.concerts.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      if (updated[0]) {
        moveConcertToPrevConcerts(updated[0]);
      } else {
        console.log("No concerts to move");
      }
    } catch (err) {
      console.log("Error loading concerts", err);
    }
  };

  useEffect(() => {
    const getConcertData = async () => {
      try {
        const res = await fetch(`/api/concerts`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("failed to fetch");
        }

        let data = await res.json();

        data.concerts.sort((a, b) => new Date(a.date) - new Date(b.date));

        const nextConcert = data.concerts[0];
        const concertDate = nextConcert.date;
        const concertTime = nextConcert.time;
        const dateParts = concertDate.split("T");
        const dateTimeString = `${dateParts[0]}T${concertTime}:00.000+01:00`;
        const dateTime = new Date(dateTimeString);
        setConcertDateTime(dateTime);
        setConcert(data.concerts[0]);
      } catch (err) {
        console.log("Error loading concerts", err);
      }
    };

    getConcertData();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(concertDateTime) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        getConcertsDat();
      }

      return timeLeft;
    };

    if (concertDateTime) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [concertDateTime]);
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
