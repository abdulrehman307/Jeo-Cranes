'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Trophy, Clock, HardHat, ChevronDown } from 'lucide-react';

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            setMousePos({
                x: (e.clientX / innerWidth - 0.5) * 20,
                y: (e.clientY / innerHeight - 0.5) * 10,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{ backgroundColor: '#050505' }}
        >
            {/* ── BACKGROUND IMAGE ── */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url("/images/hero/crane-hero.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) scale(1.05)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />

            {/* ── GRADIENT OVERLAYS for text readability ── */}
            {/* Dark left-side vignette for text area */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050505]/90 via-[#050505]/60 to-[#050505]/20" />
            {/* Dark bottom fade */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            {/* Very subtle top dark for navbar contrast */}
            <div className="absolute top-0 left-0 right-0 h-32 z-[1] bg-gradient-to-b from-[#050505]/50 to-transparent" />

            {/* ── CONTENT ── */}
            <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
                <div className="max-w-3xl">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="h-px w-10 bg-primary" />
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[11px]">
                            Since 1995 • UAE Premier Partner
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="font-black text-white uppercase tracking-tighter leading-[0.88] mb-6"
                        style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
                    >
                        LIFT{' '}
                        <span className="text-primary italic">BEYOND</span>
                        <br />
                        LIMITS
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-white/60 text-base md:text-lg font-medium max-w-lg mb-10 leading-relaxed"
                    >
                        UAE's Premier Heavyweight Lifting Partner Since 1995. Engineering
                        Excellence with up to{' '}
                        <span className="text-white font-bold">1200 Ton</span> Lifting Capacity.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.65 }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-black font-black uppercase tracking-widest text-sm rounded overflow-hidden shadow-[0_0_40px_rgba(47,168,79,0.35)] hover:shadow-[0_0_60px_rgba(47,168,79,0.5)] transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get A Quote <ArrowRight size={16} />
                            </span>
                            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="/fleet"
                            className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded backdrop-blur-sm hover:border-primary hover:text-primary transition-all duration-300"
                        >
                            View Our Fleet
                        </Link>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.85 }}
                        className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-white/10 max-w-2xl"
                    >
                        {[
                            { icon: Trophy, value: '1200T', label: 'Max Lifting Capacity' },
                            { icon: Clock, value: '25+', label: 'Years Experience' },
                            { icon: HardHat, value: '300+', label: 'Heavy Lift Projects' },
                        ].map(({ icon: Icon, value, label }) => (
                            <div key={label} className="group flex items-center gap-4">
                                <div className="p-2 rounded bg-primary/10 border border-primary/20">
                                    <Icon size={18} className="text-primary" />
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                                        {value}
                                    </div>
                                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-[0.2em] mt-0.5">
                                        {label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ── SCROLL INDICATOR ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
            >
                <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.3em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown size={20} className="text-primary" />
                </motion.div>
            </motion.div>

            {/* ── DECORATIVE RIGHT CRANE SILHOUETTE ── */}
            <div className="absolute right-0 bottom-0 top-0 z-[2] hidden lg:flex items-end justify-end pointer-events-none w-[45%]">
                <div
                    className="w-full h-full opacity-25"
                    style={{
                        backgroundImage: `url("/images/hero/crane-hero.jpg")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        maskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)',
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;
