"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { family } from "@/data/family";

const Family = () => {
  return (
    <section className="my-10">
      <div className="container flex justify-center items-center flex-col">
        <h2 className="title text-center">Naše rodinka</h2>
        <Carousel className="max-w-[90%]">
          <CarouselContent>
            {family.map((member, i) => {
              return (
                <CarouselItem key={i} className="md:basis-1/3">
                  <Card className=" shadow-md">
                    <CardContent className="p-0 text-center flex flex-col gap-3">
                      <Image
                        src={member.photo}
                        placeholder="blur"
                        className=" rounded-t-md"
                        alt={member.alt}
                      />
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                      <div className="flex justify-center items-center gap-5 mb-3">
                        <Link href={member.fcb}>
                          <span className="text-xl">
                            <FaFacebook />
                          </span>
                        </Link>
                        <Link href={member.ig}>
                          <span className="text-2xl">
                            <AiFillInstagram />
                          </span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Family;
