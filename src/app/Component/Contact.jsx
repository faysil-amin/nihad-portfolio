'use client';

import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2'; // ১. SweetAlert2 ইম্পোর্ট করা হলো
import { submitContactForm } from '@/actions/serverActions'; // ২. Server Action ইম্পোর্ট করা হলো (আপনার পাথ অনুযায়ী অ্যাডজাস্ট করুন)
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaPaperPlane } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// ৩. 'async' কিউওয়ার্ড সরিয়ে দেওয়া হলো
export default function Contact() {
    const containerRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    useGSAP(() => {
        gsap.fromTo(
            ".contact-anim",
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ১. সাবমিট হওয়ার সময় লোডার দেখান
        Swal.fire({
            title: 'Sending...',
            text: 'Please wait while we send your message.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            // ২. Server Action কল করে আগে ডাটা পাঠান
            const res = await submitContactForm(formData);

            // ৩. সার্ভার থেকে সাকসেস আসলে অ্যালার্ট দিন এবং ফর্ম রিসেট করুন
            if (res?.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you!',
                    text: 'Your message has been sent successfully.',
                    confirmButtonColor: '#3085d6',
                });

                // সফল হওয়ার পর ফর্ম রিসেট
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                // কোনো সমস্যা হলে এরর অ্যালার্ট
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res?.error || 'Something went wrong! Please try again.',
                    confirmButtonColor: '#d33',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An unexpected error occurred.',
                confirmButtonColor: '#d33',
            });
        }
    };

    return (
        <section ref={containerRef} className="bg-[#090D16] text-white py-20 px-6 sm:px-10 md:px-20 lg:px-32" id="contact">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 contact-anim">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                    <p className="text-gray-400 mt-4 text-base md:text-lg">
                        Feel free to reach out for collaborations, project inquiries, or just a friendly hello!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Contact Info & Socials (5 Cols) */}
                    <div className="lg:col-span-5 space-y-8 contact-anim">
                        <div className="bg-[#111726]/80 border border-gray-800 p-8 rounded-2xl backdrop-blur-sm shadow-xl space-y-6">
                            <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>

                            {/* Email Card */}
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-cyan-950/50 border border-cyan-800/40 rounded-xl text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                                    <a href="mailto:nihadbhuiyanb@gmail.com" className="text-gray-200 font-medium hover:text-cyan-400 transition-colors">
                                        nihadbhuiyanb@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-cyan-950/50 border border-cyan-800/40 rounded-xl text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Phone / WhatsApp</p>
                                    <a href="tel:+8801916461450" className="text-gray-200 font-medium hover:text-cyan-400 transition-colors">
                                        +880 1916461450
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-cyan-950/50 border border-cyan-800/40 rounded-xl text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                                    <p className="text-gray-200 font-medium">
                                        Bangladesh
                                    </p>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="pt-6 border-t border-gray-800/80">
                                <p className="text-sm text-gray-400 mb-4">Connect with me on social platforms:</p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/faysil-amin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-cyan-950/30 border border-cyan-800/40 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 rounded-xl transition-all duration-300"
                                    >
                                        <FaGithub className="text-xl" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/faysil-amin-nihad-80230122b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-cyan-950/30 border border-cyan-800/40 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 rounded-xl transition-all duration-300"
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                    <a
                                        href="https://web.facebook.com/nihad.bhuiyan.52"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-cyan-950/30 border border-cyan-800/40 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 rounded-xl transition-all duration-300"
                                    >
                                        <FaFacebook className="text-xl" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Interactive Form (7 Cols) */}
                    <div className="lg:col-span-7 contact-anim">
                        <form onSubmit={handleSubmit} className="bg-[#111726]/80 border border-gray-800 p-8 rounded-2xl backdrop-blur-sm shadow-xl space-y-6">
                            <h3 className="text-2xl font-bold text-gray-100 mb-2">Send Me a Message</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-[#090D16] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-[#090D16] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Collaboration"
                                    className="w-full bg-[#090D16] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hello Nihad, I'd like to discuss a project..."
                                    className="w-full bg-[#090D16] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] cursor-pointer"
                            >
                                Send Message <FaPaperPlane className="text-sm" />
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}