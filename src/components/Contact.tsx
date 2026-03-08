import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert('Thank you for your inquiry. Our team will contact you shortly.');
    };

    const offices = [
        {
            city: "Dubai",
            address: "Al Nokhita Building, Dubai, United Arab Emirates",
            phone: "+971 567077367",
            email: "info@jeocranes.com"
        },
        {
            city: "Sharjah",
            address: "Industrial Area 13, Yard No A63, Sharjah, United Arab Emirates",
            phone: "+971 565771111 | 065426560",
            email: "sajid@jeocranes.com"
        }
    ];

    return (
        <section id="contact" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="text-text-muted text-lg mb-16 leading-relaxed">
                            Feel free to contact us and get quotations and visit of your site from our team. You will not be disappointed.
                        </p>

                        <div className="space-y-12">
                            {offices.map((office, i) => (
                                <div key={i} className="group">
                                    <h4 className="text-xl font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
                                        <span className="w-8 h-px bg-primary"></span>
                                        {office.city} Office
                                    </h4>
                                    <div className="space-y-4 text-text-muted font-bold text-sm uppercase tracking-tight">
                                        <div className="flex gap-4 items-start">
                                            <MapPin className="text-primary mt-1 shrink-0" size={18} />
                                            <span>{office.address}</span>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <Phone className="text-primary shrink-0" size={18} />
                                            <span>{office.phone}</span>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <Mail className="text-primary shrink-0" size={18} />
                                            <span>{office.email}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 w-full"
                    >
                        <div className="bg-bg-light p-10 md:p-16 border border-black/5 shadow-2xl relative overflow-hidden">
                            {/* Decorative Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 -translate-y-16 translate-x-16 rotate-45" />

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Full Name</label>
                                        <input
                                            {...register("name", { required: true })}
                                            className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-black/10'} px-6 py-4 outline-none focus:border-primary transition-all font-bold uppercase tracking-tight`}
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Email Address</label>
                                        <input
                                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                            className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-black/10'} px-6 py-4 outline-none focus:border-primary transition-all font-bold uppercase tracking-tight`}
                                            placeholder="email@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Subject</label>
                                    <input
                                        {...register("subject", { required: true })}
                                        className={`w-full bg-white border ${errors.subject ? 'border-red-500' : 'border-black/10'} px-6 py-4 outline-none focus:border-primary transition-all font-bold uppercase tracking-tight`}
                                        placeholder="Crane Rental Inquiry"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Message Details</label>
                                    <textarea
                                        {...register("message", { required: true })}
                                        className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-black/10'} px-6 py-6 outline-none focus:border-primary transition-all font-bold uppercase tracking-tight h-48 resize-none`}
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-16 py-5 bg-primary text-black font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all shadow-xl flex items-center justify-center gap-4 group"
                                >
                                    Send Inquiry
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
