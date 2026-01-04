"use client";
import React from "react";
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3,
} from "react-icons/fa6";
import {
  SiMysql,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiKotlin,
  SiSwift,
  SiNextdotjs,
  SiVercel,
  SiExpo,
} from "react-icons/si";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa6";

/* ---------------- CONTACT ---------------- */

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "kaushalmaran@gmail.com",
    href: "mailto:kaushalmaran@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Phone",
    content: "+91 8610851456",
    href: "tel:+918610851456",
    icon: <FaPhone />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kaushal-maran-m-9572622b1/",
    content: "/kaushal-maran-m",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/kaushalboii",
    content: "/kaushalboii",
    icon: <FaGithub />,
  },
];

/* ---------------- KEYBOARD ICONS (24) ---------------- */

const KEYBOARD_TOOLS = [
  FaApple,
  FaAndroid,
  SiSwift,
  SiKotlin,
  FaReact,
  SiNextdotjs,
  SiExpo,
  FaNodeJs,
  SiJavascript,
  SiTypescript,
  FaHtml5,
  FaCss3,
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  FaDocker,
  FaAws,
  SiVercel,
  FaGit,
  FaGithub,
  FaLinux,
];

/* ---------------- PAGE ---------------- */

export default function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        
        {/* SIDEBAR */}
        <aside className="w-full md:basis-1/4">
          <div className="p-8 rounded-2xl border border-zinc-600">
            <div className="flex flex-col items-center gap-4">
              <img
                src="/assets/me.jpg"
                alt="Kaushal Maran M"
                className="rounded-full w-40 h-40 bg-zinc-800 p-2"
              />
              <p className="text-xl">Kaushal Maran M</p>
              <div className="text-xs bg-zinc-700 px-3 py-1 rounded-full">
                Mobile App Developer (Android & iOS)
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white"
                >
                  {link.icon}
                  {link.content}
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="basis-3/4">
          <div className="p-10 border border-zinc-600 rounded-md">
            
            <h1 className="text-3xl mb-10">About me</h1>

            <p className="mb-10">
              Hey there! I&apos;m <strong>Kaushal Maran M</strong>, a passionate
              Mobile App Developer specializing in Android and iOS development.
              I focus on building clean, scalable, and user-friendly mobile
              applications that solve real-world problems.
            </p>

            <p className="mb-10">
              When I&apos;m not coding, I enjoy exploring new technologies,
              improving app performance, and designing better user experiences —
              usually with a cup of coffee ☕.
            </p>

            <h1 className="text-3xl mb-10">Stuff I use</h1>

            {/* KEYBOARD GRID */}
            <div className="flex justify-center">
              <div className="grid grid-cols-6 gap-4 p-6 rounded-2xl bg-zinc-900 border border-zinc-700">
                {KEYBOARD_TOOLS.map((Icon, index) => (
                  <div
                    key={index}
                    className="
                      w-14 h-14 
                      flex items-center justify-center
                      rounded-xl
                      bg-zinc-800
                      border border-zinc-700
                      text-2xl
                      hover:scale-110 hover:bg-zinc-700
                      transition-all duration-300
                    "
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
