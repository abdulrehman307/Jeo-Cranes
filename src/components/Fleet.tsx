import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FLEET_DATA, FLEET_CATEGORIES, Equipment } from '@/data/fleet';
import { ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

const FleetCard = ({ item, delay }: { item: Equipment; delay: number }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white border border-black/5 group overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500"
        >
            <div className="relative h-72 overflow-hidden bg-bg-light">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-black font-black px-4 py-1 text-sm z-10 shadow-lg">
                    {item.capacity}
                </div>
                <div className="absolute bottom-4 left-4 glass px-4 py-2 z-10 text-white font-black uppercase tracking-widest text-[10px]">
                    {item.make}
                </div>
            </div>

            <div className="p-8 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors leading-tight">
                        {item.name}
                    </h3>
                </div>

                <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-text-muted border-b border-black/5 pb-2">
                        <span>Model</span>
                        <span className="text-black">{item.model}</span>
                    </div>
                    {Object.entries(item.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-[10px] font-black uppercase tracking-widest text-text-muted border-b border-black/5 pb-2">
                            <span>{key}</span>
                            <span className="text-black">{value}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-auto">
                    <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-3 py-4 bg-bg-dark text-white font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-black transition-all group/btn"
                    >
                        Inquire Now
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

interface FleetProps {
    featuredOnly?: boolean;
    showFilters?: boolean;
    title?: string;
    subtitle?: string;
}

const Fleet: React.FC<FleetProps> = ({
    featuredOnly = false,
    showFilters = false,
    title = "Precision Fleet",
    subtitle = "Operating a diverse range of hydraulic and electric equipment from 20 to 1200 Tons. Strictly maintained for maximum safety and uptime."
}) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredData = FLEET_DATA.filter(item => {
        const isFeaturedMatch = featuredOnly ? item.featured : true;
        const isCategoryMatch = activeCategory === "All" ? true : item.category === activeCategory;
        return isFeaturedMatch && isCategoryMatch;
    });

    return (
        <section id="fleet" className="py-32 bg-bg-light">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 bg-primary/10 text-primary font-black uppercase tracking-[0.4em] text-xs mb-6"
                    >
                        Equipment Inventory
                    </motion.div>
                    <h2 className="section-title mx-auto text-center block">{title}</h2>
                    <p className="text-text-muted max-w-2xl mx-auto mt-8 text-lg uppercase tracking-tight font-bold">
                        {subtitle}
                    </p>
                </div>

                {showFilters && (
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {FLEET_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                                        ? 'bg-primary text-black shadow-xl scale-105'
                                        : 'bg-white text-text-muted border border-black/5 hover:border-primary/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredData.map((item, i) => (
                            <FleetCard key={item.id} item={item} delay={i * 0.05} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {featuredOnly && (
                    <div className="text-center mt-20">
                        <Link
                            href="/fleet"
                            className="inline-flex items-center gap-4 px-12 py-5 bg-bg-dark text-white font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-2xl group"
                        >
                            View Full Fleet Catalog
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Fleet;
