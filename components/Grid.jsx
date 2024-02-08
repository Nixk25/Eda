import React from "react";
import { Card, CardContent } from "./ui/card";
import { GiMicrophone } from "react-icons/gi";
import { IoMusicalNotesSharp } from "react-icons/io5";

const cardStyles =
  "flex justify-center items-center text-center flex-col p-0 h-full py-10 outline-none ";

const Grid = () => {
  return (
    <section className="my-20">
      <div className="container flex flex-col gap-5 sm:grid sm:grid-cols-3 sm:grid-rows-2   ">
        <Card className="bg-[#212121] order-1 div1 border-none outline-none shadow-2xl">
          <CardContent className={cardStyles}>
            <h2 className="text-xl main ">20</h2>
            <p className="text-primary ">Vydaných skladeb</p>
          </CardContent>
        </Card>
        <Card className="order-2 div2 shadow-2xl">
          <CardContent className={cardStyles}>
            <GiMicrophone className="main" />
          </CardContent>
        </Card>
        <Card className="bg-[#212121] order-3 sm:order-4 div4 border-none outline-none shadow-2xl">
          <CardContent className={cardStyles}>
            <h2 className="text-xl main ">2k</h2>
            <p className="text-primary">Posluchačů</p>
          </CardContent>
        </Card>
        <Card className="order-4 sm:order-3 div3 shadow-2xl">
          <CardContent className={cardStyles}>
            <IoMusicalNotesSharp className="main" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Grid;
