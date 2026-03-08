import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Quick Links', items: [
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/#gallery' },
                { name: 'Equipment Fleet', path: '/fleet' },
                { name: 'Contact Us', path: '/contact' }
            ]
        },
        {
            title: 'Our Services', items: [
                { name: 'Cranes & Equipment', path: '/fleet' },
                { name: 'Heavy Lifting', path: '/#services' },
                { name: 'Excavation & Filling', path: '/#services' },
                { name: 'Complex Lifting', path: '/#services' },
                { name: 'Heavy Transport', path: '/#services' }
            ]
        }
    ];

    return (
        <footer className="bg-black pt-24 pb-12 text-white border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-8">
                            <Image src="/logo-light.svg" alt="JEO CRANES" width={240} height={64} className="h-12 w-auto" />
                        </Link>
                        <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-xs">
                            Providing state-of-the-art lifting solutions across the UAE since 1995. One of the largest equipment rental companies with a reputation for quality and safety.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white/50 hover:bg-primary hover:text-black transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h4 className="text-lg font-black uppercase tracking-widest mb-8 text-primary">
                                {column.title}
                            </h4>
                            <ul className="space-y-4">
                                {column.items.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.path} className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
                                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-widest mb-8 text-primary">
                            Contact Info
                        </h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                                <div className="text-sm text-text-muted">
                                    <span className="block font-bold text-white mb-1 uppercase tracking-tight">Dubai Office</span>
                                    Al Nokhita Building, Dubai, UAE
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Phone className="text-primary shrink-0" size={20} />
                                <div className="text-sm text-text-muted">
                                    +971 56 707 7367
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Mail className="text-primary shrink-0" size={20} />
                                <div className="text-sm text-text-muted">
                                    info@jeocranes.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted uppercase tracking-[0.2em] font-bold">
                    <p>© {currentYear} JEO CRANES TRANSPORT COMPANY. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
