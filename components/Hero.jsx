import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Countdown from "./Countdown";
import concerts from "@/data/concerts";

const Hero = () => {
  const closestConcert = concerts[0];
  return (
    <section className="min-h-[100dvh] flex justify-center items-center flex-col text-center relative">
      <div className="flex flex-col gap-10 container ">
        <h1 className="clamp">Taková normální rodinka band</h1>
        <p>
          Vítejte na našem hudebním domově, kde hudba není jen zvukem, ale
          rodinným spojením! Jsme "Taková Normální Rodinka Band," skupina, která
          vás zve na nezapomenutelnou cestu za zvukem a příběhem.
        </p>
        <div className=" flex gap-5 justify-center items-center">
          <Button asChild>
            <Link href="#contact">Kontaktujte nás</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="#about">O nás</Link>
          </Button>
        </div>
        <h1 className="text-lg">Následující koncert:</h1>
        <Countdown date={closestConcert.date} />
      </div>
    </section>
  );
};

export default Hero;
