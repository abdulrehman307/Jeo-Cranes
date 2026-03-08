import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>JEO CRANES | Premier Heavy Lifting & Crane Rental UAE</title>
        <meta name="description" content="Leading crane rental and heavy lifting services across UAE since 1995. Professional fleet from 20 to 1200 tons." />
      </Head>

      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Fleet featuredOnly={true} />
        <Industries />
        <Testimonials />

        {/* Secondary CTA */}
        <section className="bg-primary py-24 text-black text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-black rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-none">
              Ready to lift your project to <br /> the Next Level?
            </h2>
            <p className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-12 max-w-2xl mx-auto opacity-80">
              State of the art equipment and dedicated professional team available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" className="px-12 py-5 bg-black text-white font-black uppercase tracking-widest text-sm hover:scale-110 transition-transform shadow-2xl">
                Get Free Quotation
              </a>
              <a href="tel:+971567077367" className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:scale-110 transition-transform shadow-2xl">
                Call Engineering Team
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
