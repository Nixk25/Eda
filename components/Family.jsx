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
        <Carousel className="max-w-[85%]">
          <CarouselContent></CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Family;
