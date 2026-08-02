'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap, FaCertificate, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const cards = cardsRef.current;

        // Header and Text Animation
        if (text) {
            gsap.fromTo(
                text.children,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Feature Cards Animation
        if (cards.length > 0) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: cards[0],
                        start: 'top 85%',
                    },
                }
            );
        }
    }, []);

    const highlights = [
        {
            icon: <FaCode className="text-cyan-400 text-3xl" />,
            title: "Clean Code",
            desc: "Writing scalable, modular, and optimized code for modern web architectures."
        },
        {
            icon: <FaRocket className="text-cyan-400 text-3xl" />,
            title: "Fast Delivery",
            desc: "Building high-performance, responsive web applications using Next.js & React."
        },
        {
            icon: <FaLightbulb className="text-cyan-400 text-3xl" />,
            title: "Problem Solver",
            desc: "Leveraging mathematical logic to solve complex algorithms & state management."
        }
    ];

    return (
        <section ref={sectionRef} className="bg-[#090D16] text-white py-20 px-6 sm:px-10 md:px-20 lg:px-32" id="about">
            <div className="max-w-6xl mx-auto">

                {/* 1. Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                    <p className="text-gray-400 mt-4 text-base md:text-lg">
                        Crafting modern, scalable, and high-performance web applications with clean code
                    </p>
                </div>

                {/* 2. Top Bio Section */}
                <div ref={textRef} className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">
                        Hello! I'm <span className="text-cyan-400 font-bold">Nihad</span>, a passionate Full Stack Web Developer.
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        I specialize in building dynamic, user-centric web applications using React, Next.js, Node.js, Express, and MongoDB. With a strong foundation in analytical problem-solving and modern JavaScript frameworks, I focus on writing maintainable code, creating smooth GSAP animations, and optimizing web performance.
                    </p>
                    <div className="p-6 bg-[#111726]/80 border border-gray-800 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto shadow-lg">
                        <p className="text-cyan-300 italic text-sm md:text-base">
                            "Driven by logic, design, and continuous learning to build digital experiences that deliver real value."
                        </p>
                    </div>
                </div>

                {/* 3. Core Highlights Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            ref={el => (cardsRef.current[index] = el)}
                            className="bg-[#111726]/60 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 group"
                        >
                            <div className="mb-4 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-cyan-400 transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 4. Education & Credentials (2 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-gray-800/80">
                    <div
                        ref={el => (cardsRef.current[3] = el)}
                        className="flex items-center gap-5 bg-[#111726]/80 border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-cyan-400/40 transition-all duration-300"
                    >
                        <div className="p-4 bg-cyan-950/50 rounded-2xl border border-cyan-800/40 text-cyan-400 text-3xl flex-shrink-0">
                            <FaGraduationCap />
                        </div>
                        <div>
                            <h5 className="text-lg md:text-xl font-bold text-gray-100">B.Sc. (Hons) in Mathematics</h5>
                            <p className="text-cyan-400 text-sm font-medium mt-1">2nd Year Student — Strong Analytical & Logic Background</p>
                        </div>
                    </div>

                    <div
                        ref={el => (cardsRef.current[4] = el)}
                        className="flex items-center gap-5 bg-[#111726]/80 border border-gray-800 p-6 md:p-8 rounded-2xl hover:border-cyan-400/40 transition-all duration-300"
                    >
                        <div className="p-4 bg-cyan-950/50 rounded-2xl border border-cyan-800/40 text-cyan-400 text-3xl flex-shrink-0">
                            <FaCertificate />
                        </div>
                        <div>
                            <h5 className="text-lg md:text-xl font-bold text-gray-100">Full Stack Web Development</h5>
                            <p className="text-cyan-400 text-sm font-medium mt-1">MERN Stack & Next.js Specialist (Project-Driven)</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;