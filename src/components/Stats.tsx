import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, label, prefix = '', suffix = '' }: { target: number, label: string, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const duration = 2000; // 2 seconds

            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * target));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }
    }, [isInView, target]);

    return (
        <div ref={ref} className="text-center p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group">
            <div className="text-4xl md:text-6xl font-black text-primary mb-4 tabular-nums">
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            <div className="text-xs md:text-sm font-bold text-white/50 uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                {label}
            </div>
        </div>
    );
};

const Stats = () => {
    const stats = [
        { label: "Projects Completed", value: 2536 },
        { label: "Happy Clients", value: 6784 },
        { label: "Tasks Completed", value: 1059 },
        { label: "In House Professionals", value: 435 },
        { label: "Coffee Cups", value: 2239 }
    ];

    return (
        <section className="bg-bg-dark py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    {stats.map((stat, i) => (
                        <Counter
                            key={i}
                            target={stat.value}
                            label={stat.label}
                            suffix={stat.label.includes('Capacity') ? 'T' : ''}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
