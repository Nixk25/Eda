import React from "react";
import { Card, CardContent } from "./ui/card";
import { GiMicrophone } from "react-icons/gi";
import { IoMusicalNotesSharp } from "react-icons/io5";

const cardStyles =
  "flex justify-center items-center text-center flex-col p-0 h-full py-10";

const Grid = () => {
  return (
    <section className="my-20">
      <div className="container flex flex-col gap-5 sm:grid sm:grid-cols-3 sm:grid-rows-2 ">
        <Card className="bg-black/60 order-1 div1">
          <CardContent className={cardStyles}>
            <h2 className="text-xl text-white clamp">20</h2>
            <p className="text-white">Vydaných skladeb</p>
          </CardContent>
        </Card>
        <Card className="order-2 div2">
          <CardContent className={cardStyles}>
            <GiMicrophone className="clamp" />
          </CardContent>
        </Card>
        <Card className="bg-black/60 order-3 sm:order-4 div4">
          <CardContent className={cardStyles}>
            <h2 className="text-xl text-white clamp">2k</h2>
            <p className="text-white">Posluchačů</p>
          </CardContent>
        </Card>
        <Card className="order-4 sm:order-3 div3">
          <CardContent className={cardStyles}>
            <IoMusicalNotesSharp className="clamp" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Grid;
