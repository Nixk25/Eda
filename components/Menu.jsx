"use client";

import React, { useState } from "react";
import { links } from "@/data/links";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import logo from "../public/logo.png";
import { IoIosClose } from "react-icons/io";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" sm:hidden">
      <div onClick={() => setIsOpen(true)} className="  sm:hidden">
        <MenuIcon />
      </div>

      <div
        className={
          isOpen
            ? " fixed top-0 right-0  text-center  h-dvh w-screen ease-in-out duration-300 z-50 bg-[#212121]"
            : " fixed top-0 right-[-100%] text-center h-dvh w-screen z-50 bg-[#212121] transition-all ease-in-out duration-300"
        }
      >
        <Image
          className="absolute top-5 left-1/2 -translate-x-[50%] "
          src={logo}
          width={200}
          height={200}
          alt="Logo"
        />
        <nav className="flex justify-center items-center h-full">
          <ul className="list-none flex flex-col gap-5 text-3xl uppercase">
            {links.map((link, i) => (
              <li key={i} onClick={() => setIsOpen(false)} className="navText">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
          <div className="absolute top-5 right-5 ">
            <IoIosClose size={45} onClick={() => setIsOpen(false)} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
