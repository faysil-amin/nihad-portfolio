"use client"
import React, { useRef } from 'react'
import Logo from './Logo'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

export default function Navbar() {
    const navRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
        );
    });

    return (
        <header ref={navRef} className="fixed rounded-full top-5 inset-x-0 mx-auto w-[90%] md:w-[65%] z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 px-5">
            <div className="flex items-center justify-between gap-6 max-w-7xl mx-auto px-6 py-4">

                {/* logo */}
                <a href="#home">
                    <Logo />
                </a>

                {/* navigate - Responsive (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-6 font-medium text-white">
                    <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
                    <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                    <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
                    <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                </div>

                {/* Resume button*/}
                <div>
                    <a
                        href="/resume.pdf"
                        download="Nihad_Resume.pdf"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-400 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:opacity-90 transition-all block cursor-pointer"
                    >
                        Resume
                    </a>
                </div>

            </div>
        </header>
    )
}