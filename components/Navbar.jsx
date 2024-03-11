"use client";

import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { links } from "@/data/links";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
const Navbar = () => {
  const { status } = useSession();
  const pathname = usePathname();
  const isLogin = ["/login", "/register"].includes(pathname);

  return (
    <>
      {!isLogin && (
        <nav className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-5 text-white backdrop-blur-sm">
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
          <div className="hidden gap-3 uppercase sm:flex">
            {links.map(({ href, text }, i) => (
              <Link
                key={i}
                className="text-xs cursor-pointer navText md:text-base"
                href={href}
              >
                {text}
              </Link>
            ))}
          </div>
          <Menu />
          {status === "authenticated" && (
            <Button onClick={signOut}>Odhlásit se</Button>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
