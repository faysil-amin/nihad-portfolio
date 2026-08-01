'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// React Icons
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { FaGraduationCap, FaCertificate, FaUserAlt } from 'react-icons/fa';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    // GSAP Refs
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const skillItemsRef = useRef([]);

    // GSAP Animations
    useEffect(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const skills = skillItemsRef.current;

        // Text Content Animation
        if (text) {
            gsap.fromTo(text.children,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'top 20%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // Skills Grid Staggered Animation
        if (skills.length > 0) {
            gsap.fromTo(skills,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: skills[0],
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }, []);

    // Skills Stack Data
    const skillsList = [
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'MongoDB', icon: SiMongodb },
    ];

    return (
        <section ref={sectionRef} className="bg-black text-white py-20 px-6 sm:px-10 md:px-20 lg:px-40" id="about">
            <div className="container mx-auto">

                {/* 1. Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold inline-block border-b-4 border-cyan-500 pb-2">
                        About Me
                    </h2>
                    <p className="text-xl text-neutral-400 mt-4">
                        Transforming your digital ideas into seamless web experiences
                    </p>
                </div>

                {/* 2. Main Content: 2-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Biography */}
                    <div ref={textRef} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <FaUserAlt className="text-cyan-400 text-3xl" />
                            <h3 className="text-3xl font-semibold">Who Am I?</h3>
                        </div>

                        <p className="text-lg text-neutral-300 leading-relaxed">
                            Hello! I'm Nihad, a passionate <span className="font-bold text-cyan-400">Full Stack Web Developer</span>.
                            I specialize in building clean, responsive, and user-centric web applications. Solving complex web challenges and mastering modern technologies drive my daily work.
                        </p>

                        <div className="bg-neutral-900 p-6 rounded-2xl border border-cyan-500/10">
                            <p className="text-neutral-400">
                                I am dedicated to collaborating with teams to deliver web solutions that not only elevate your business but also offer an outstanding user experience.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Technical Skills */}
                    <div className="mt-12 lg:mt-0">
                        <h4 className="text-2xl font-semibold mb-8 text-cyan-400">Technical Skills</h4>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {skillsList.map((skill, index) => {
                                const SkillIcon = skill.icon;

                                return (
                                    <div
                                        key={skill.name}
                                        ref={el => skillItemsRef.current[index] = el}
                                        className="flex flex-col items-center gap-3 bg-neutral-950 p-6 rounded-2xl border-2 border-transparent hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-xl group"
                                    >
                                        <SkillIcon className="text-6xl text-cyan-400/70 group-hover:text-cyan-400 group-hover:rotate-12 transition-transform" />
                                        <p className="text-sm font-semibold tracking-wider">{skill.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* 3. Education & Credentials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-cyan-500/20">
                    <div className="flex items-start gap-5 bg-neutral-900 p-8 rounded-3xl">
                        <FaGraduationCap className="text-cyan-400 text-4xl mt-1" />
                        <div>
                            <h5 className="text-xl font-bold">B.Sc. (Hons) in Mathematics</h5>
                            <p className="text-neutral-400 mt-1">2nd Year Student</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-5 bg-neutral-900 p-8 rounded-3xl">
                        <FaCertificate className="text-cyan-400 text-4xl mt-1" />
                        <div>
                            <h5 className="text-xl font-bold">Full Stack Web Development</h5>
                            <p className="text-neutral-400 mt-1">Self-Taught & Project-Driven</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;