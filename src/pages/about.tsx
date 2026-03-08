import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    const team = [
        { name: "Mr. Sajid Ali Kayani", role: "Managing Director" },
        { name: "Mr. Badar ud Din", role: "Sales Executive" },
        { name: "Mr. Abdul Rehman", role: "Safety Officer" },
        { name: "Mr. Muhammad Banaras", role: "Operations Manager" },
        { name: "Mr. Nouman Yousafzai", role: "Accountant" },
        { name: "Mr. Tariq Hayat", role: "Administrator" },
        { name: "Mr. Abdul Basit", role: "IT Manager" }
    ];

    return (
        <>
            <Head>
                <title>About Us | JEO CRANES - Emirati Heritage, Global Standards</title>
            </Head>

            <Navbar />
            <main className="pt-20 md:pt-32">
                {/* Page Hero */}
                <section className="bg-bg-dark py-16 md:py-28 relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
                        >
                            Our Legacy
                        </motion.h1>
                        <p className="text-white/50 text-base md:text-xl font-bold uppercase tracking-widest max-w-2xl">
                            Delivering the best lifting services across UAE since 1995.
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
                </section>

                {/* Director Message */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                                >
                                    <Image
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                                        alt="Director JEO CRANES"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 bg-primary p-6 md:p-10 text-black shadow-2xl">
                                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest leading-none mb-2">Sajid Kiyani</h3>
                                        <span className="text-xs font-black uppercase tracking-[0.4em]">Director of JEO CRANES</span>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 md:mb-10 text-secondary">Director's Message</h2>
                                <blockquote className="text-xl md:text-2xl font-medium italic mb-6 md:mb-10 text-secondary-light leading-snug">
                                    "You will not be disappointed. At JeoCranes quality and customer satisfaction is our main goal. We have state of the art equipment, experienced team and dedication to work."
                                </blockquote>
                                <div className="space-y-4 md:space-y-6 text-text-muted text-base md:text-lg leading-relaxed">
                                    <p>JeoCranes is a reputed company and delivering best lifting services across UAE since 1995. Our fleet has wide range of cranes ranging from 20 Tons to 1200 Tons.</p>
                                    <p>Beside crane rentals and lifting services JeoCranes provide excavation, transportation and waste management services. We provide all kind of lifting and crane rental services for your short and long term projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Intro */}
                <section className="py-24 bg-bg-light">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">About Company</h2>
                        <p className="text-xl text-text-muted leading-relaxed font-medium mb-12 uppercase">
                            We at JEO Cranes are proud of the excellent reputation we have earned through the provision of high quality products and services to the equipment rental market.
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed mb-12">
                            For more than two decades, we have grown to become one of the largest equipment rental companies. Geo cranes provides a first class crane rental service, either on a Contract Lift Basis or Hired and Managed, 24 hours a day, 365 days a year.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                            <div className="p-10 bg-white shadow-xl border-t-4 border-primary">
                                <h4 className="text-3xl font-black mb-4">1995</h4>
                                <span className="text-xs font-black uppercase tracking-widest opacity-50">Founded</span>
                            </div>
                            <div className="p-10 bg-white shadow-xl border-t-4 border-primary">
                                <h4 className="text-3xl font-black mb-4">24/7</h4>
                                <span className="text-xs font-black uppercase tracking-widest opacity-50">Support</span>
                            </div>
                            <div className="p-10 bg-white shadow-xl border-t-4 border-primary">
                                <h4 className="text-3xl font-black mb-4">1200T</h4>
                                <span className="text-xs font-black uppercase tracking-widest opacity-50">Max Capacity</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Members */}
                <section className="py-32 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="mb-20 text-center">
                            <h2 className="section-title mx-auto block text-center">Our Leadership</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-8 border border-black/5 bg-bg-light group hover:bg-bg-dark transition-all duration-300"
                                >
                                    <h4 className="text-lg font-black uppercase tracking-tighter mb-2 group-hover:text-primary transition-colors">{member.name}</h4>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted group-hover:text-white/50 transition-colors">{member.role}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
