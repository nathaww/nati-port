"use client"
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { domainAreas } from '@/lib/data';
import * as Icons from '@/components/icons';
import ServiceCard from './Services/Service';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Database: Icons.Database,
    Workflow: Icons.Workflow,
    Zap: Icons.Zap,
    Code: Icons.Code,
    Figma: Icons.Figma,
    TrendingUp: Icons.TrendingUp,
};

const Service = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div ref={container} className={`bg-white relative z-30 py-12 lg:py-24`}>
            <div className="px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl mb-6 text-black font-manrope font-extrabold uppercase">
                        Areas of Ownership
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-agdasima">
                        Leading cross-functional teams across the full product lifecycle.
                    </p>
                </div>
            </div>
            {
                domainAreas.map((domain, i) => {
                    const IconComponent = iconMap[domain.icon] || Icons.Code;
                    const targetScale = 1 - ((domainAreas.length - i) * 0.05);
                    const rangeStart = i / domainAreas.length;
                    return <ServiceCard
                        key={`domain_${i}`}
                        i={i}
                        title={domain.title}
                        copy={domain.blurb}
                        icon={<IconComponent className="w-12 h-12" />}
                        progress={scrollYProgress}
                        range={[rangeStart, 1]}
                        targetScale={targetScale}
                    />
                })
            }
        </div>
    )
}

export default Service