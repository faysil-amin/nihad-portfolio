'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Bebas_Neue, Meddon } from 'next/font/google'
import Image from 'next/image'
import React, { useRef } from 'react'
import { FiDownload } from 'react-icons/fi'

const neue = Bebas_Neue({ weight: '400', subsets: ['latin'] })
const meddon = Meddon({ weight: '400', subsets: ['latin'] })

export default function Banner() {
    const containerRef = useRef(null)
    const imageRef = useRef(null)
    const textRef = useRef(null)
    const infoRef = useRef(null)
    const badgeRef = useRef(null)

    // 🔴 scope বাদ দিয়ে অ্যানিমেশন লিখুন:
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        if (textRef.current) {
            tl.from(textRef.current, { y: -50, opacity: 0, duration: 1.2 })
        }
        if (imageRef.current) {
            tl.from(imageRef.current, { y: 80, opacity: 0, duration: 1.4 }, '-=0.8')
        }
        if (infoRef.current) {
            tl.from(infoRef.current, { x: -40, opacity: 0, duration: 1 }, '-=0.9')
        }
        if (badgeRef.current) {
            tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.8 }, '-=0.8')
        }
    }) // 👈 scope অপশনটি বাদ দেওয়া হয়েছে

    return (
        <section id="home">
            <div className='bg-black md:h-screen pb-8'>
                <div className="flex flex-col-reverse md:grid md:grid-cols-12 pt-20 px-6 sm:px-12">
                    {/* left banner section */}
                    <div className='md:col-span-4 pt-6 z-10'>
                        <div
                            ref={infoRef}
                            className="mt-10 md:mt-24 order-3 md:order-1 md:col-span-5 lg:col-span-4 z-30 text-center md:text-left max-w-md md:max-w-lg md:pl-2"
                        >
                            {/* Sub-heading */}
                            <p className={`${meddon.className}  text-cyan-300 text-xl sm:text-lg lg:text-xl mb-1.5 -mt-20`}>
                                Hello, I&apos;m
                            </p>

                            {/* Big Main Name */}
                            <h2 className={`${neue.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-wide text-white drop-shadow-md`}>
                                NIHAD <br />
                                BHUIYAN
                            </h2>

                            {/* Divider Line */}
                            <div className="w-24 h-[4px] bg-cyan-400 my-4 md:my-5 rounded-full mx-auto md:mx-0" />

                            {/* Description Paragraph */}
                            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-normal">
                                I build responsive, user-friendly, and high-performance web applications with clean code and exceptional user experience.
                            </p>

                            {/* Download CV Button */}
                            <a
                                href="/resume.pdf"
                                download
                                className="text-white inline-flex items-center gap-3 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black active:scale-95 transition-all duration-300 px-7 py-3 sm:py-3.5 rounded-xl mt-6 sm:mt-7 text-sm sm:text-base font-semibold tracking-wider cursor-pointer"
                            >
                                Download CV
                                <FiDownload className="text-lg transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                    {/* right banner section */}
                    <div className='md:col-span-8 z-0'>
                        <div className="order-2 md:order-2 md:col-span-8 lg:col-span-8 relative w-full h-[380px] sm:h-[480px] md:h-[85vh] flex items-end justify-center">
                            <h1
                                ref={textRef}
                                className={`${neue.className} absolute pt-15 lg:pt-30 top-0 sm:top-6 md:top-[10%] text-[18vw] md:text-[14vw] lg:text-[16vw] xl:text-[17vw] tracking-tight leading-none bg-gradient-to-b from-cyan-200 via-cyan-400/60 to-transparent bg-clip-text text-transparent whitespace-nowrap z-0 scale-y-[1.3] md:scale-y-[1.5] origin-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] pointer-events-none`}
                            >
                                PORTFOLIO
                            </h1>
                            <div
                                ref={imageRef}
                                className="relative z-10 w-[60%] sm:w-[55%] md:w-[80%] lg:w-[75%] max-w-[700px] flex justify-center items-end h-full"
                            >
                                {/* 1. Bottom Glow Shadow (ইমেজের ঠিক নিচে বসবে) */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-cyan-500/40 blur-2xl rounded-full pointer-events-none z-0"></div>

                                {/* 2. Profile Image */}
                                <Image
                                    src="/banner-image.png"
                                    alt="Nihad's Profile"
                                    width={900}
                                    height={900}
                                    priority
                                    className="relative z-10 w-full h-auto max-h-[58vh] lg:max-h-[68vh] object-contain transition-transform duration-500 hover:scale-[1.02]"
                                />

                                {/* 3. Bottom Black Fade */}
                                <div className="absolute -bottom-10 -mx-6 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20 md:mx-0 md:w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}