import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import { links } from "@/data/links";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-5 bg-white/50 fixed top-0 left-0 w-full z-10 backdrop-blur-sm ">
      <div>
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo skupiny Taková normální rodinka band"
          />
        </Link>
      </div>
      <div className=" flex gap-3 uppercase ">
        {links.map(({ href, text }, i) => (
          <Link
            key={i}
            className="navText cursor-pointer text-xs md:text-base"
            href={href}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
