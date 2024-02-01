import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-5 bg-white/50 fixed top-0 left-0 w-full z-10">
      <div>
        <Link href="/">
          <Image src={logo} width={100} height={100} />
        </Link>
      </div>
      <div className=" flex gap-3 uppercase">
        <Link href="/disco">Diskografie</Link>
        <span>|</span>
        <Link href="/concerts">Koncerty</Link>
        <span>|</span>
        <Link href="/photos">Fotky</Link>
      </div>
    </nav>
  );
};

export default Navbar;
