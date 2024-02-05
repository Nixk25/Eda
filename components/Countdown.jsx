"use client";
import { useState, useEffect } from "react";
import concertsData from "../data/concerts";

const Countdown = () => {
  const calculateTimeRemaining = (endDate) => {
    const now = new Date().getTime();
    return Math.max(endDate - now, 0);
  };

  const [currentConcertIndex, setCurrentConcertIndex] = useState(0);
  const currentConcert = concertsData[currentConcertIndex];
  const timezoneOffset = new Date().getTimezoneOffset() * 60000; // získání aktuálního offsetu
  const endDate =
    new Date(currentConcert.date).getTime() + timezoneOffset - 60000;

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(endDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remaining = calculateTimeRemaining(endDate);

      if (remaining > 0) {
        setTimeRemaining(remaining);
      } else {
        // Koncert skončil a na další koncert
        setCurrentConcertIndex(
          (prevIndex) => (prevIndex + 1) % concertsData.length
        );

        // Reset odpočet pro další koncert
        const newEndDate = new Date(
          concertsData[currentConcertIndex + 1].date
        ).getTime();
        setTimeRemaining(calculateTimeRemaining(newEndDate));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate, currentConcertIndex]);

  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <h2 className="text-2xl">{currentConcert.name}</h2>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3">
          <div className="time font-extrabold">
            {Math.floor(timeRemaining / (1000 * 60 * 60 * 24))}{" "}
          </div>
          <span className="text-sm">Dní</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="time font-extrabold">
            {Math.floor(
              (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )}{" "}
          </div>
          <span className="text-sm">Hodin</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="time font-extrabold">
            {Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))}
          </div>
          <span className="text-sm">Minut</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="time font-extrabold">
            {Math.floor((timeRemaining % (1000 * 60)) / 1000)}
          </div>
          <span className="text-sm">Sekund</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
