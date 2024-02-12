import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { socials } from "@/data/socials";

const Footer = () => {
  return (
    <section className="mt-10 pt-10 pb-2  flex justify-center items-center flex-col gap-5">
      <div className="flex justify-center items-center gap-5">
        {socials.map(({ follow, link, icon }, i) => {
          return (
            <Link key={i} href={link} target="_blank">
              <HoverCard>
                <HoverCardTrigger asChild className="cursor-pointer">
                  {icon}
                </HoverCardTrigger>
                <HoverCardContent className="w-max text-sm shadow-md">
                  Sledujte nás na {follow}!
                </HoverCardContent>
              </HoverCard>
            </Link>
          );
        })}
      </div>
      <p className="text-white text-center">
        ©2024 TNRB. Všechna práva vyhrazena
      </p>
      <span>
        Vytvořil{" "}
        <Link
          className="text-primary"
          target="_blank"
          href="https://www.nicolasmelda.com"
        >
          Nick
        </Link>
      </span>
    </section>
  );
};

export default Footer;
