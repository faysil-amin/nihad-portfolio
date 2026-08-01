"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const containerRef = useRef(null);

    // প্রজেক্টের আপডেট করা লিস্ট
    const projectsList = [
        {
            title: "Dot Com — Experience Sharing Platform",
            description: "A full-stack web platform where users can share daily experiences, stories, and ideas. Features secure Firebase & JWT authentication, multi-tier admin control, and Stripe payment integration.",
            image: "/dot-com.png",
            tags: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Firebase", "Stripe", "JWT",],
            liveLink: "https://assignment-11-a032d.web.app/",
            githubClient: "https://github.com/faysil-amin/DotCom-clind",
            githubServer: "https://github.com/faysil-amin/DotCom-server",
        },
        {
            title: "Web AI — AI Web Services Directory",
            description: "A full-stack web application for discovering, publishing, and purchasing AI tools. Features secure Firebase authentication, personal user dashboards, service publishing, and seamless light/dark mode themes.",
            image: "/web-ai.png",
            tags: ["React", "Firebase", "Express.js", "MongoDB", "Tailwind CSS"],
            liveLink: "https://stupendous-rolypoly-b1fbff.netlify.app/",
            githubClient: "https://github.com/faysil-amin/web-ai-cliend-site",
            githubServer: "https://github.com/faysil-amin/web-ai-server-site",
        },
        {
            title: "Developer Portfolio & Showcase",
            description: "A modern developer portfolio built with Next.js and Tailwind CSS, featuring smooth Lenis scroll dynamics, immersive GSAP animations, interactive project showcases, and a fully responsive UI design.",
            image: "/portfolio.png",
            tags: ["Next.js", "React", "GSAP", "Lenis Scroll", "Tailwind CSS"],
            liveLink: "https://nihadportfolio.vercel.app/",
            githubClient: "https://github.com/faysil-amin/nihad-portfolio",
            githubServer: null,
        }
    ];

    // GSAP ScrollTrigger Animation
    useGSAP(() => {
        gsap.fromTo(
            ".project-card",
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="bg-[#090D16] text-white py-20 px-6 md:px-12" id="projects">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                    <p className="text-gray-400 mt-4 text-base md:text-lg">
                        Some of my recent web development work and full-stack applications
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsList.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group relative bg-[#111726]/80 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] flex flex-col justify-between"
                        >
                            <div>
                                {/* Image Banner */}
                                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-900">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="text-[11px] px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-gray-800/60">

                                {/* GitHub Links Section */}
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                                    <FaGithub className="text-base text-gray-400" />
                                    <a
                                        href={project.githubClient}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        Client
                                    </a>
                                    {project.githubServer && (
                                        <>
                                            <span className="text-gray-600">|</span>
                                            <a
                                                href={project.githubServer}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-cyan-400 transition-colors duration-300"
                                            >
                                                Server
                                            </a>
                                        </>
                                    )}
                                </div>

                                {/* Live Demo Button */}
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.15)]"
                                >
                                    Live Demo <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}