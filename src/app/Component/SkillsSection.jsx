"use client";

import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// React Icons
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiJsonwebtokens,
    SiPostman,
    SiVercel
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState('All');
    const containerRef = useRef(null);

    const skills = [
        // Frontend
        { name: 'HTML5', category: 'Frontend', level: 'Expert', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', category: 'Frontend', level: 'Expert', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', category: 'Frontend', level: 'Advanced', icon: <FaJsSquare className="text-yellow-400" /> },
        { name: 'React.js', category: 'Frontend', level: 'Advanced', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Next.js', category: 'Frontend', level: 'Advanced', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', icon: <SiTailwindcss className="text-cyan-300" /> },

        // Backend & Database
        { name: 'Node.js', category: 'Backend', level: 'Intermediate', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', category: 'Backend', level: 'Intermediate', icon: <SiExpress className="text-gray-300" /> },
        { name: 'MongoDB', category: 'Database', level: 'Intermediate', icon: <SiMongodb className="text-emerald-500" /> },

        // Auth & Security
        { name: 'JWT', category: 'Auth & Security', level: 'Advanced', icon: <SiJsonwebtokens className="text-pink-500" /> },
        { name: 'Firebase', category: 'Auth & Security', level: 'Intermediate', icon: <SiFirebase className="text-amber-500" /> },
        { name: 'NextAuth.js', category: 'Auth & Security', level: 'Intermediate', icon: <TbBrandNextjs className="text-cyan-300" /> },

        // Tools
        { name: 'Git', category: 'Tools', level: 'Advanced', icon: <FaGitAlt className="text-red-500" /> },
        { name: 'GitHub', category: 'Tools', level: 'Advanced', icon: <FaGithub className="text-white" /> },
        { name: 'Postman', category: 'Tools', level: 'Intermediate', icon: <SiPostman className="text-orange-400" /> },
        { name: 'Vercel', category: 'Tools', level: 'Advanced', icon: <SiVercel className="text-white" /> },
    ];

    const categories = ['All', 'Frontend', 'Backend', 'Database', 'Auth & Security', 'Tools'];

    const filteredSkills = activeTab === 'All'
        ? skills
        : skills.filter(skill => skill.category === activeTab);

    // GSAP Animation Tab Change / Initial Load এ ট্রিগার হবে
    useGSAP(() => {
        gsap.fromTo(
            ".skill-card",
            { opacity: 0, y: 30, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.out"
            }
        );
    }, { scope: containerRef, dependencies: [activeTab] });

    return (
        <section id='skills' ref={containerRef} className="bg-[#090D16] text-white py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                        Technical <span className="text-cyan-400">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeTab === cat
                                ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(34,211,238,0.5)]'
                                : 'bg-[#111726] text-gray-400 hover:text-cyan-400 hover:bg-[#161f33]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card group relative flex flex-col items-center justify-center p-6 bg-[#111726]/80 border border-gray-800 rounded-2xl backdrop-blur-sm transition-shadow duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                        >
                            {/* Badge for Level */}
                            <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {skill.level}
                            </span>

                            {/* Glowing Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />

                            {/* Icon */}
                            <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                                {skill.icon}
                            </div>

                            {/* Skill Name */}
                            <h3 className="text-base font-semibold tracking-wide text-gray-200 group-hover:text-cyan-400 transition-colors duration-300 text-center">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}