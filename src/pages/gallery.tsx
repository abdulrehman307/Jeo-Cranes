import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MapPin, Calendar } from 'lucide-react';

interface Project {
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    description: string;
}

const projects: Project[] = [
    {
        title: "Dubai Marina Tower Lift",
        category: "High-Rise Construction",
        location: "Dubai Marina, UAE",
        year: "2023",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
        description: "250-ton crane lift for steel structural erection at 65 floors"
    },
    {
        title: "Abu Dhabi Bridge Span",
        category: "Infrastructure",
        location: "Abu Dhabi, UAE",
        year: "2023",
        image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=1600&auto=format&fit=crop",
        description: "Critical bridge segment placement across major waterway"
    },
    {
        title: "Industrial Plant Assembly",
        category: "Oil & Gas",
        location: "Ruwais, UAE",
        year: "2022",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop",
        description: "Multi-crane tandem lift for refinery module installation"
    },
    {
        title: "Sharjah Port Expansion",
        category: "Marine & Port",
        location: "Sharjah, UAE",
        year: "2022",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1600&auto=format&fit=crop",
        description: "Heavy gantry crane installation for new container berth"
    },
    {
        title: "Solar Farm Infrastructure",
        category: "Renewable Energy",
        location: "Al Ain, UAE",
        year: "2022",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
        description: "Precision placement of 2,400 solar panel racking systems"
    },
    {
        title: "Railway Overpass Beam",
        category: "Civil Engineering",
        location: "Dubai Metro, UAE",
        year: "2021",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop",
        description: "Night-time critical beam placement above live traffic"
    },
    {
        title: "Water Desalination Plant",
        category: "Utilities",
        location: "Fujairah, UAE",
        year: "2021",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop",
        description: "500-ton module lift for desalination facility upgrade"
    },
    {
        title: "High-Rise Façade Panels",
        category: "High-Rise Construction",
        location: "Business Bay, Dubai",
        year: "2023",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1600&auto=format&fit=crop",
        description: "Curtain wall system installation for 80-storey tower"
    },
    {
        title: "Stadium Roof Truss",
        category: "Sports Infrastructure",
        location: "Dubai, UAE",
        year: "2020",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
        description: "400-ton main roof truss installation for sports arena"
    },
    {
        title: "Offshore Platform Module",
        category: "Oil & Gas",
        location: "Persian Gulf",
        year: "2021",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
        description: "Barge-based crane lift for offshore drilling platform module"
    },
    {
        title: "Airport Terminal Expansion",
        category: "Aviation",
        location: "DXB, Dubai",
        year: "2022",
        image: "https://images.unsplash.com/photo-1551244072-5d12893278bc?q=80&w=1600&auto=format&fit=crop",
        description: "Steel canopy erection for new terminal gate expansion"
    },
    {
        title: "Warehouse Steel Frame",
        category: "Industrial",
        location: "JAFZA, Dubai",
        year: "2023",
        image: "https://images.unsplash.com/photo-1565699467759-83c960af8f7e?q=80&w=1600&auto=format&fit=crop",
        description: "Fast-track 150,000 sqm logistics hub steel frame erection"
    }
];

const categories = ['All', 'High-Rise Construction', 'Infrastructure', 'Oil & Gas', 'Marine & Port', 'Renewable Energy', 'Civil Engineering', 'Utilities', 'Sports Infrastructure', 'Aviation', 'Industrial'];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

    const filtered = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);

    return (
        <>
            <Head>
                <title>Project Gallery | JEO CRANES - UAE Heavy Lift Projects</title>
                <meta name="description" content="Explore JEO CRANES' portfolio of completed heavy lift and crane transport projects across UAE - from high-rise towers to industrial plants." />
            </Head>

            <Navbar />

            <main className="bg-white">
                {/* ── Page Hero ── */}
                <section
                    className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
                    style={{ backgroundColor: '#050505' }}
                >
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 to-[#050505]" />

                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-5"
                        >
                            <span className="h-px w-8 bg-primary" />
                            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Project Portfolio</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4"
                        >
                            Our <span className="text-primary">Projects</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/50 max-w-xl text-base md:text-lg font-medium"
                        >
                            300+ completed heavy lift projects across UAE. Precision, safety, and engineering excellence delivered every time.
                        </motion.p>
                    </div>
                </section>

                {/* ── Category Filters ── */}
                <section className="sticky top-[60px] z-40 bg-white border-b border-black/5 shadow-sm">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`flex-shrink-0 px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded transition-all duration-200 ${selectedCategory === cat
                                            ? 'bg-primary text-black'
                                            : 'bg-black/5 text-black/60 hover:bg-black/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Gallery Grid ── */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                        >
                            <AnimatePresence mode="popLayout">
                                {filtered.map((project, i) => (
                                    <motion.div
                                        key={project.title}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, delay: i * 0.04 }}
                                        onClick={() => setLightboxProject(project)}
                                        className="group relative overflow-hidden cursor-pointer bg-black rounded-sm"
                                        style={{ aspectRatio: '4/3' }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                        {/* Zoom Icon */}
                                        <div className="absolute top-4 right-4 p-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                            <ZoomIn size={14} className="text-black" />
                                        </div>

                                        {/* Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                                            <span className="text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-1 block">{project.category}</span>
                                            <h3 className="text-white font-black uppercase text-sm md:text-base tracking-tight leading-tight">{project.title}</h3>
                                            <div className="flex items-center gap-3 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                <span className="flex items-center gap-1 text-white/60 text-[10px]">
                                                    <MapPin size={10} /> {project.location}
                                                </span>
                                                <span className="flex items-center gap-1 text-white/60 text-[10px]">
                                                    <Calendar size={10} /> {project.year}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filtered.length === 0 && (
                            <div className="text-center py-20 text-black/40 font-bold uppercase tracking-widest">
                                No projects in this category yet.
                            </div>
                        )}
                    </div>
                </section>

                {/* ── CTA Banner ── */}
                <section className="py-16 md:py-24 bg-[#050505]">
                    <div className="container mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Ready to Start <span className="text-primary">Your Project?</span>
                        </h2>
                        <p className="text-white/40 mb-8 max-w-md mx-auto">Join 300+ satisfied clients who trust JEO CRANES for their heavy lifting needs across UAE.</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 md:px-12 py-4 bg-primary text-black font-black uppercase tracking-widest text-sm rounded hover:bg-primary/90 transition-all shadow-[0_0_40px_rgba(47,168,79,0.3)]"
                        >
                            Get A Free Quote
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {lightboxProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxProject(null)}
                        className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111] rounded-sm overflow-hidden"
                        >
                            <button
                                onClick={() => setLightboxProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/60 rounded-full text-white hover:bg-primary hover:text-black transition-all"
                            >
                                <X size={20} />
                            </button>
                            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                                <Image
                                    src={lightboxProject.image}
                                    alt={lightboxProject.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 80vw"
                                />
                            </div>
                            <div className="p-5 md:p-6">
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">{lightboxProject.category}</span>
                                <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mt-1 mb-2">{lightboxProject.title}</h3>
                                <p className="text-white/50 text-sm mb-4">{lightboxProject.description}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-white/40">
                                    <span className="flex items-center gap-1.5"><MapPin size={13} className="text-primary" /> {lightboxProject.location}</span>
                                    <span className="flex items-center gap-1.5"><Calendar size={13} className="text-primary" /> {lightboxProject.year}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
