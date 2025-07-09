"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { PROJECT_SKILLS } from "@/data/projects";

import "@splidejs/react-splide/css";

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Internships</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-xl border border-zinc-600 bg-zinc-800 shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in">
          <h3 className="text-xl font-bold mb-2">Learn and Build</h3>
          <p className="text-sm text-zinc-400 mb-1">Front End Web Development</p>
          <p className="text-xs text-zinc-500 mb-2">2023 &middot; 1 Month</p>
          <span className="inline-block px-3 py-1 bg-blue-700 text-xs rounded-full">Internship</span>
        </div>
        <div className="p-6 rounded-xl border border-zinc-600 bg-zinc-800 shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in">
          <h3 className="text-xl font-bold mb-2">Regx Software</h3>
          <p className="text-sm text-zinc-400 mb-1">MERN Stack Web Development</p>
          <p className="text-xs text-zinc-500 mb-2">2024 &middot; 2 Months</p>
          <span className="inline-block px-3 py-1 bg-green-700 text-xs rounded-full">Internship</span>
        </div>
        <div className="p-6 rounded-xl border border-zinc-600 bg-zinc-800 shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in">
          <h3 className="text-xl font-bold mb-2">Linux World</h3>
          <p className="text-sm text-zinc-400 mb-1">Multiple Creator</p>
          <p className="text-xs text-zinc-500 mb-2">Current</p>
          <span className="inline-block px-3 py-1 bg-yellow-700 text-xs rounded-full">Internship</span>
        </div>
      </div>
      <h1 className="text-4xl mb-[50px]">Projects</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
        {projects.map((project) => (
          <li
            className="w-[320px] h-[480px] border-[.5px] rounded-md border-zinc-600 bg-zinc-900/60 shadow-lg hover:scale-[1.03] transition-transform"
            key={project.id}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="h-[200px]">
              <Splide
                options={{
                  type: "loop",
                  interval: 3000,
                  autoplay: true,
                  speed: 2000,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="Project Screenshots"
              >
                {project.screenshots.map((image) => (
                  <SplideSlide key={image}>
                    <Image
                      src={image}
                      alt={`screenshot of ${project.title}`}
                      className="w-[320px] h-[200px] rounded-md bg-zinc-900 object-cover"
                      width={320}
                      height={200}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="p-4 text-zinc-300 flex flex-col h-[220px] justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1">{project.title}</h2>
                <p className="mt-1 text-xs text-zinc-400 mb-2">
                  {project.content.props.children[0].props.children}
                </p>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {project.skills.frontend.map((skill, idx) => (
                    <span key={idx} title={skill.title} className="inline-flex items-center px-2 py-1 bg-zinc-800 rounded text-xs">
                      {skill.icon} <span className="ml-1">{skill.title}</span>
                    </span>
                  ))}
                  {project.skills.backend.map((skill, idx) => (
                    <span key={idx} title={skill.title} className="inline-flex items-center px-2 py-1 bg-zinc-800 rounded text-xs">
                      {skill.icon} <span className="ml-1">{skill.title}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Link href={project.live} target="_blank" className="flex-1">
                  <Button className="w-full" variant="default">Live Demo</Button>
                </Link>
                {project.github && (
                  <Link href={project.github} target="_blank" className="flex-1">
                    <Button className="w-full" variant="outline">GitHub</Button>
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
