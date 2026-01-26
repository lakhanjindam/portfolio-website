
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { liveStatus } from '../data';
import { ExternalLink } from 'lucide-react';

const LiveStatus = () => {
    const [activeTabId, setActiveTabId] = useState(liveStatus[0].id);
    const [statusData, setStatusData] = useState(liveStatus);
    const activeItem = statusData.find(item => item.id === activeTabId) || statusData[0];

    // Fetch Steam Data
    useEffect(() => {
        const fetchSteamData = async () => {
            try {
                // In development (vite), api/ is not served. This will fail gracefully.
                // In production (Vercel), this will work.
                const res = await fetch('/api/steam');
                if (!res.ok) return;

                const data = await res.json();

                if (data.isPlaying && data.game) {
                    setStatusData(prev => prev.map(item => {
                        if (item.id === 'gaming') {
                            return {
                                ...item,
                                title: data.game.name,
                                subtitle: "Currently Playing",
                                image: data.game.image || item.image, // Fallback to default if no image
                                link: data.game.link,
                                tags: ["Steam", "Live Status", "PC"]
                            };
                        }
                        return item;
                    }));
                }
            } catch (error) {
                console.log("Steam API fetch failed (expected in local dev)", error);
            }
        };

        fetchSteamData();
        // Poll every 5 minutes
        const interval = setInterval(fetchSteamData, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative py-20 px-4 overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-4xl mx-auto space-y-12">

                {/* Header Section */}
                <div className="flex flex-col items-center space-y-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-800"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Live Status</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                    >
                        Currently
                    </motion.h2>
                </div>

                {/* Tabs */}
                <div className="flex justify-center">
                    <div className="flex bg-gray-900/50 backdrop-blur-sm p-1 rounded-2xl border border-gray-800/50 relative">
                        {statusData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTabId(item.id)}
                                className={`relative z-10 px-6 py-2.5 text-sm md:text-base font-medium transition-colors duration-300 ${activeTabId === item.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                            >
                                {activeTabId === item.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gray-800 rounded-xl"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <item.icon className="w-4 h-4" />
                                    {item.tabLabel}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3D Content Card */}
                <div className="perspective-1000 flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeItem.id}
                            initial={{ opacity: 0, rotateX: 20, scale: 0.9 }}
                            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateX: -20, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative w-full max-w-2xl aspect-video md:aspect-[2/1] group cursor-pointer"
                        >
                            {/* Outer Glow - Behind the card */}
                            <div
                                className="absolute -inset-4 bg-emerald-500/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 will-change-transform"
                                style={{ transform: 'translateZ(-10px)' }}
                            />

                            {/* Card Content - Clipped */}
                            <div className="relative h-full w-full rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden isolate [-webkit-mask-image:radial-gradient(white,black)]">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col justify-end items-start text-left transform-style-3d translate-z-10">

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {activeItem.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-xs font-medium text-white/90">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-1 mb-6">
                                        <span className={`text-xs md:text-sm font-bold tracking-wider uppercase ${activeItem.color}`}>
                                            {activeItem.subtitle}
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white">
                                            {activeItem.title}
                                        </h3>
                                    </div>

                                    {/* Action Link */}
                                    <motion.a
                                        href={activeItem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-950 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
                                    >
                                        View Details
                                        <ExternalLink className="w-4 h-4" />
                                    </motion.a>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default LiveStatus;
