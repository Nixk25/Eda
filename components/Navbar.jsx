import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { links } from "@/data/links";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-5  fixed top-0 left-0 w-full z-10 backdrop-blur-sm text-white ">
      <div>
        <Link href="/">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="logo skupiny Taková normální rodinka band"
            className="md:w-[150px] md:h-[150px] h-[100px] w-[100px]"
          />
        </Link>
      </div>
      <div className=" gap-3 uppercase hidden sm:flex ">
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
      <Menu />
    </nav>
  );
};

export default Navbar;
