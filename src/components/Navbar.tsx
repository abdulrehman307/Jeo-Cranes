import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [router.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => {
        if (path === '/') return router.pathname === '/';
        return router.pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[#050505] py-3 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
                    : 'bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                    <Image
                        src="/logo-light.svg"
                        alt="JEO CRANES Logo"
                        width={200}
                        height={50}
                        className="h-9 md:h-10 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-7 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`relative text-xs font-black uppercase tracking-widest transition-colors duration-200 group pb-1 ${isActive(link.path)
                                    ? 'text-white'
                                    : 'text-white/60 hover:text-white'
                                }`}
                        >
                            {link.name}
                            {/* Active underline indicator */}
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(link.path)
                                        ? 'w-full'
                                        : 'w-0 group-hover:w-full'
                                    }`}
                            />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-2 px-6 py-2.5 bg-primary text-black font-black uppercase text-xs tracking-widest rounded hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(47,168,79,0.3)]"
                    >
                        Get A Quote
                    </Link>
                </nav>

                {/* Mobile Controls */}
                <div className="lg:hidden flex items-center gap-2">
                    <a
                        href="tel:+971567077367"
                        className="p-2 bg-primary/10 rounded-full text-primary"
                        aria-label="Call us"
                    >
                        <Phone size={16} />
                    </a>
                    <button
                        className="text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Full-Screen Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                        className="fixed inset-0 bg-[#050505] flex flex-col p-6 z-[100] overflow-y-auto"
                    >
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center mb-10">
                            <Image src="/logo-light.svg" alt="Logo" width={180} height={45} className="h-8 w-auto" />
                            <button
                                className="text-white p-2"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close Menu"
                            >
                                <X size={30} />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <nav className="flex flex-col gap-1 flex-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    <Link
                                        href={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center justify-between py-4 border-b font-black text-2xl uppercase tracking-tight transition-colors ${isActive(link.path)
                                                ? 'text-primary border-primary/30'
                                                : 'text-white/70 border-white/5 hover:text-primary'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive(link.path) && (
                                            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                                                Current
                                            </span>
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Mobile CTA */}
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full text-center py-4 bg-primary text-black font-black uppercase tracking-widest text-base rounded-md shadow-xl mb-6"
                            >
                                Request Proposal
                            </Link>
                            <div className="border-t border-white/10 pt-6 text-white/30 text-sm space-y-2">
                                <p className="flex items-center gap-3"><Phone size={14} className="text-primary" /> +971 56 707 7367</p>
                                <p className="pl-[22px]">info@jeocranes.com</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
