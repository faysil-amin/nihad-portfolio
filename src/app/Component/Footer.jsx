'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaArrowUp } from 'react-icons/fa'; // FaYoutube যোগ করা হয়েছে
import Logo from './Logo';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-[#050811] text-gray-400 border-t border-gray-800/80 pt-12 pb-8 px-6 sm:px-10 md:px-20 lg:px-32 relative">
            <div className="max-w-6xl mx-auto">

                {/* Top Section: Brand Info & Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-gray-800/60">

                    {/* Column 1: Brand & Bio */}
                    <div className="space-y-4">
                        <a href="#home" className='pb-2'>
                            <Logo />
                        </a>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            Full Stack Web Developer passionate about building modern, scalable, and high-performance web applications.
                        </p>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div className="md:mx-auto">
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Connect */}
                    <div className="md:ml-auto">
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                        <div className="flex gap-3">
                            {/* GitHub */}
                            <a
                                href="https://github.com/faysil-amin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[#111726] border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 rounded-xl transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-lg" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/faysil-amin-nihad-80230122b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[#111726] border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 rounded-xl transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-lg" />
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://www.youtube.com/@NihadAcademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[#111726] border border-gray-800 text-gray-300 hover:text-red-500 hover:border-red-500/50 rounded-xl transition-all duration-300"
                                title="Nihad Academy"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="text-lg" />
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://web.facebook.com/nihad.bhuiyan.52"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[#111726] border border-gray-800 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 rounded-xl transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="text-lg" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Copyright & Scroll Button */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                        © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Nihad Bhuiyan</span>. Designed & Built with Next.js & Tailwind CSS.
                    </p>

                    {/* Scroll To Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-[#111726] border border-gray-800 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
                        title="Back to top"
                    >
                        <FaArrowUp className="text-sm group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

            </div>
        </footer>
    );
}