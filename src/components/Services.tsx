import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Settings, Truck, Trash2, Shield, Calendar } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -10 }}
            className="relative p-10 bg-bg-light border border-black/5 group overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500" />
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-8 shadow-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <div className="w-12 h-1 bg-black/10 mb-6 group-hover:w-full transition-all duration-500" />
            <p className="text-text-muted text-sm leading-relaxed mb-8">
                Providing specialized {title.toLowerCase()} with state-of-the-art equipment and certified experts.
            </p>
            <button className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-black hover:text-primary transition-colors group/btn">
                Learn More <span className="transform group-hover/btn:translate-x-2 transition-transform">→</span>
            </button>
        </motion.div>
    );
};

const Services = () => {
    const servicesList = [
        { icon: Anchor, title: "Cranes & Equipment Hire" },
        { icon: Settings, title: "Heavy Lifting & Erection" },
        { icon: Shield, title: "Critical & Complex Lifting" },
        { icon: Trash2, title: "Excavation & Filling" },
        { icon: Truck, title: "Heavy & Light Transport" },
        { icon: Calendar, title: "Maintenance Contracts" }
    ];

    return (
        <section id="services" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="h-0.5 w-12 bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-widest text-sm">Industrial Solutions</span>
                        </motion.div>
                        <h2 className="section-title">Superior Lifting<br />Services</h2>
                    </div>
                    <p className="text-text-muted lg:w-1/3 text-lg leading-relaxed mb-4">
                        We deliver the best lifting services across UAE with state-of-the-art equipment and an experienced team dedicated to your project's success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, i) => (
                        <ServiceCard
                            key={i}
                            icon={service.icon}
                            title={service.title}
                            delay={i * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
