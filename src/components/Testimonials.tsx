import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Obaid bin Sultan",
            role: "CEO at Albaraka",
            content: "All I can say is Thank you! You have been absolutely amazing. I love how everything came together as well. I’ve already recommended you to a few people. We achieved exactly what we set out to do."
        },
        {
            name: "Aqba bin Musa",
            role: "CEO at Altasij",
            content: "We appreciate the one-on-one help we have received from you. The local business journal that we were targeting ran our press release as they were supposed to and a reporter called us and did a small story on us. Thanks!!"
        }
    ];

    return (
        <section className="py-32 bg-bg-dark text-white relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                            What Our <br /> <span className="text-primary">Clients Say</span>
                        </h2>
                        <div className="w-24 h-2 bg-primary mb-12" />
                        <p className="text-white/50 text-xl font-medium uppercase tracking-tight">
                            Quality and customer satisfaction is our main goal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 w-full"
                    >
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="testimonial-swiper"
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-white/5 border border-white/10 p-12 md:p-20 relative shadow-2xl backdrop-blur-sm">
                                        <Quote className="text-primary opacity-20 absolute top-10 right-10" size={120} />

                                        <div className="flex gap-1 mb-10">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#2FA84F" className="text-primary" />)}
                                        </div>

                                        <p className="text-2xl md:text-4xl font-medium leading-tight mb-12 italic text-white/90">
                                            "{t.content}"
                                        </p>

                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-1 bg-primary"></div>
                                            <div>
                                                <h4 className="text-xl font-black uppercase tracking-widest text-primary">{t.name}</h4>
                                                <span className="text-white/40 font-bold uppercase tracking-tight text-xs">{t.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          width: 40px !important;
          height: 4px !important;
          border-radius: 0 !important;
          opacity: 1 !important;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #2FA84F !important;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
