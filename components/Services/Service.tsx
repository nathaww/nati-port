"use client"
import { useTransform, motion, MotionValue } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './service.css';
import Link from 'next/link';

interface ServiceCardProps {
    i: number;
    title: string;
    copy: string;
    icon: React.ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    domain: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ i, title, copy, icon, progress, range, targetScale, domain }) => {
    // Map service domains to project filter domains
    const domainMap: Record<string, string> = {
        'data': 'data',
        'automation': 'ai',
        'poc': 'web',
        'web': 'web',
        'ux': 'uiux',
        'business': 'all'
    };
    
    const projectDomain = domainMap[domain] || 'all';
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mobileTargetScale = 1 - ((6 - i) * 0.02);
    const finalTargetScale = isMobile ? mobileTargetScale : targetScale;

    const scale = useTransform(progress, range, [1, finalTargetScale]);

    return (
        <div ref={container} className="cardContainer h-screen md:h-[80vh]">
            <motion.div
                className="card bg-white border border-slate-500 rounded-[4rem] flex flex-col justify-between"
                style={{
                    scale,
                    top: isMobile ? `calc(${i * 35}px)` : `calc(-5vh + ${i * 35}px)`
                }}
            >
                <div className="flex items-center gap-4 mb-4 lg:mb-6">
                    {icon && (
                        <div className="text-emerald-600">
                            {icon}
                        </div>
                    )}
                </div>
                <div className='flex flex-col md:flex-row justify-between w-full'>
                    <div className='w-full'>
                        <h2 className='font-manrope text-black text-4xl md:text-6xl font-bold uppercase mb-4 lg:mb-6'>{title}</h2>
                        <div className="body">
                            <div className="description">
                                <p className='text-slate-600 font-agdasima text-lg md:text-2xl leading-relaxed'>{copy}</p>
                            </div>
                        </div>
                    </div>

                    <Link 
                        href={`/projects?domain=${projectDomain}`} 
                        className='circle-button bg-primary cursor-pointer font-manrope text-white font-bold md:size-36 text-sm rounded-full py-4 lg:py-0 mt-6 lg:mt-0 flex items-center justify-center'
                    >
                        <p className="relative z-10 mx-auto text-center">
                            Show <br /> Projects
                        </p>
                        <span className="circle-bg" />
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default ServiceCard