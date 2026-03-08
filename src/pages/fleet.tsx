import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FleetComponent from '@/components/Fleet';

export default function FleetPage() {
    return (
        <>
            <Head>
                <title>Equipment Fleet | JEO CRANES - 20T to 1200T Capacity</title>
            </Head>

            <Navbar />
            <main>
                <FleetComponent
                    showFilters={true}
                    title="Complete Inventory"
                    subtitle="Explore our comprehensive range of heavy machinery, from 1200-ton cranes to specialized transport solutions."
                />

                <section className="bg-bg-dark py-16 md:py-24 text-center relative overflow-hidden border-t border-white/5">
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 md:mb-6">Need a Custom Fleet Solution?</h2>
                        <p className="text-text-muted text-base md:text-lg mb-8 max-w-2xl mx-auto uppercase tracking-wide">
                            Contact our specialists for long-term rental and multi-crane project support.
                        </p>
                        <Link href="/contact" className="inline-block px-8 md:px-10 py-4 bg-primary text-black font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl text-sm md:text-base">
                            Speak with Specialist
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
