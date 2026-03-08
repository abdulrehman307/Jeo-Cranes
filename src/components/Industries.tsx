import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Droplets, HardHat, Factory, Zap } from 'lucide-react';

const Industries = () => {
    const industries = [
        { icon: Building2, name: "Construction" },
        { icon: Droplets, name: "Oil & Gas" },
        { icon: HardHat, name: "Infrastructure" },
        { icon: Factory, name: "Industrial" },
        { icon: Zap, name: "Power & Energy" }
    ];

    return (
        <section className="py-24 bg-black border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                    {industries.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-white/20 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 border border-white/10 group-hover:border-primary/50 shadow-2xl mb-6">
                                <item.icon size={40} strokeWidth={1} />
                            </div>
                            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] group-hover:text-primary transition-colors text-center">
                                {item.name}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
