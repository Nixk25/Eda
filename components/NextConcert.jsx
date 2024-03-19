import React from "react";
import Countdown from "./Countdown";

import { Button } from "./ui/button";
import Link from "next/link";
const NextConcert = () => {
  return (
    <section className="mb-20">
      <div className="container flex flex-col items-center justify-center gap-5 mt-5 text-center ">
        <h1 className="text-lg text-center">Následující koncert:</h1>
        <Countdown />
        <Button className="w-max " asChild>
          <Link href="/concerts">Všechny koncerty</Link>
        </Button>
      </div>
    </section>
  );
};

export default NextConcert;
