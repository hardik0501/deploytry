"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { Linkedin } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div className="relative z-10 w-fit mx-auto">
      {/* Modern glassmorphism card with animated background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-2xl rounded-2xl w-full h-full" />
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl flex gap-6 p-6 items-center justify-center">
        {show &&
          BUTTONS.map((button) => (
            <Link href={button.href} key={button.name} target="_blank">
              <Button variant={"ghost"} className="transition-transform duration-200 hover:scale-110">
                {button.icon}
              </Button>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SocialMediaButtons;
