import React from "react";
import Countdown from "./Countdown";
import concerts from "@/data/concerts";
import { Button } from "./ui/button";
import Link from "next/link";
const NextConcert = () => {
  const closestConcert = concerts[0];
  return (
    <section className="mb-20">
      <div className=" container flex justify-center items-center flex-col gap-5 mt-5 text-center">
        <h1 className="text-lg text-center">Následující koncert:</h1>
        <Countdown date={closestConcert.date} />
        <Button className="w-max " asChild>
          <Link href="/concerts">Všechny koncerty</Link>
        </Button>
      </div>
    </section>
  );
};

export default NextConcert;
