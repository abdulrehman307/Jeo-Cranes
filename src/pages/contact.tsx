import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactComponent from '@/components/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Us | JEO CRANES - Get a Free Quote Today</title>
            </Head>

            <Navbar />
            <main className="pt-20 md:pt-32">
                <section className="bg-bg-dark py-14 md:py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
                        >
                            Inquire Now
                        </motion.h1>
                        <p className="text-white/50 text-base md:text-xl font-bold uppercase tracking-widest max-w-2xl">
                            Our team is ready to visit your site and provide engineered lifting plans.
                        </p>
                    </div>
                </section>

                <ContactComponent />

                {/* Embedded Map Placeholder */}
                <section className="py-0 relative grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="bg-bg-light h-[500px] w-full flex items-center justify-center border-y border-black/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm grayscale"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541625602330-2277a1cd13a1?q=80&w=2070&auto=format&fit=crop")' }} />
                        <div className="relative z-10 text-center p-12 bg-white/90 backdrop-blur-md shadow-2xl border border-primary/20 max-w-lg">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Strategic Location</h3>
                            <p className="text-text-muted text-sm mb-6 uppercase tracking-widest font-bold">Dubai & Sharjah Headquarters</p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-xl"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
