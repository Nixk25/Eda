import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import photo1 from "../public/photo1.jpg";
import photo2 from "../public/photo2.jpg";
import photo3 from "../public/photo3.jpg";
import photo4 from "../public/photo4.jpg";
import photo5 from "../public/photo5.jpg";
import photo6 from "../public/photo6.jpg";

const About = () => {
  return (
    <section id="about" className="bg-primary py-10 text-black">
      <div className="container flex justify-center items-center flex-col ">
        <h2 className="font-bold title">Kdo jsme?</h2>
        <p className="text-center ">
          Taková normální rodinka band, je veselá a hravá. Kapela vznikla 13. 8.
          2021 v 18 hodin a 34 minut v prostorách vysokomýtské pivnice Stejk
          Bejk. ,,Naše tvorba nemá mantinely a nezříkáme se vůbec ničeho“,
          poodkrývá dvířka do tvůrčí kuchyně mistr šesti strun Eduard Příhoda. O
          dvě struny méně ovládá v bandu jeho syn Eduard Příhoda mladší. Rodinné
          vazby jsou v TNR BAND stěžejní. Za mikrofonem stojí Jaromír Štolba a
          saxofon spolu s nevšedním pěveckým projevem dává k lepšímu Jaromírova
          dcera Sára. Za mikrofonem si roli vokalistky svědomitě plní Sofie,
          taktéž dcera Jaromíra. Bicí soupravu má v malíku Ondřej Nešpor,
          benjamínek kapely a vícenásobný mistr ČR v kickboxu. Suma sumárum, dva
          tatínci a čtyři děti, to je Taková normální rodinka band. Kladný vztah
          ke sportu vedl vysokomýtské umělce ke složení hymny futsalového týmu
          1. F.C. Nejzbach Vysoké Mýto a i ostatní veselé skladby jako Pomsta
          medvědí, Víťa či Macour přesně charakterizují pozitivní energii
          vysokomýtského sextetu.
        </p>
        <Carousel
          className="w-full max-w-lg my-[60px]"
          orientation="vertical"
          opts={{ align: "start" }}
        >
          <CarouselContent className="-mt-1 h-[370px]">
            <CarouselItem className="p-1">
              <Image
                src={photo1}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  maxWidth: "600px",
                }}
                placeholder="blur"
                className="rounded-md"
                alt="fotka skupiny Taková normální rodinka band"
              />
            </CarouselItem>
            <CarouselItem className="p-1">
              <Image
                src={photo2}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  maxWidth: "600px",
                }}
                className="rounded-md"
                placeholder="blur"
                alt="fotka skupiny Taková normální rodinka band"
              />
            </CarouselItem>
            <CarouselItem className="p-1">
              <Image
                src={photo3}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  maxWidth: "600px",
                }}
                className="rounded-md"
                placeholder="blur"
                alt="fotka skupiny Taková normální rodinka band"
              />
            </CarouselItem>
            <CarouselItem className="p-1">
              <Image
                src={photo4}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  maxWidth: "600px",
                }}
                className="rounded-md"
                placeholder="blur"
                alt="fotka skupiny Taková normální rodinka band"
              />
            </CarouselItem>
            <CarouselItem className="p-1">
              <Image
                src={photo5}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  maxWidth: "600px",
                }}
                className="rounded-md"
                placeholder="blur"
                alt="fotka skupiny Taková normální rodinka band"
              />
            </CarouselItem>
            <CarouselItem className="p-1">
              <Image
                src={photo6}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  maxWidth: "600px",
                }}
                className="rounded-md"
                placeholder="blur"
                alt="fotka skupiny Taková normální rodinka band"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default About;
