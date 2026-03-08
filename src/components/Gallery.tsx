import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Gallery = () => {
    const projects = [
        {
            title: "Dubai Waterfront Development",
            category: "Infrastructure",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Abu Dhabi Refining Facility",
            category: "Oil & Gas",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Solar Grid Expansion",
            category: "Power & Energy",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
        },
        {
            title: "Industrial Plant Assembly",
            category: "Industrial",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
        }
    ];

    return (
        <section id="gallery" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="section-title">Projects Showcase</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative h-[400px] md:h-[600px] overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                            <div className="absolute bottom-10 left-10 right-10 z-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">{project.category}</span>
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                                    {project.title}
                                </h3>
                                <div className="w-16 h-1 bg-primary group-hover:w-full transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
