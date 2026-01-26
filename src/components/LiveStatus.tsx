
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { liveStatus } from '../data';
import { LiveStatusItem, LiveStatusContent } from '../types';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import crunchyrollLogo from '../images/crunchyroll.png';
import steamLogo from '../images/steam.png';

const TiltCard = ({ item, isActive, isWatchingTab = false }: {
    item: LiveStatusContent & { color: string },
    isActive: boolean,
    isWatchingTab?: boolean
}) => {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isActive) return;
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
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
            transition={{ duration: 0.4 }}
            style={{
                rotateX: isActive ? rotateX : 0,
                rotateY: isActive ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative w-[90vw] md:w-[700px] aspect-[16/10] md:aspect-[2/1] group ${isActive ? 'cursor-pointer' : 'cursor-default pointer-events-none'
                }`}
        >
            {/* Outer Glow - Behind the card from all 4 corners */}
            <div
                className={`absolute -inset-3 rounded-[2rem] blur-2xl transition-all duration-500 will-change-transform opacity-0 ${isActive ? 'group-hover:opacity-60' : ''} ${item.color.includes('emerald') ? 'bg-emerald-500' :
                    item.color.includes('blue') ? 'bg-blue-500' :
                        item.color.includes('purple') ? 'bg-purple-500' : 'bg-emerald-500'
                    }`}
                style={{ transform: 'translateZ(-20px)' }}
            />

            {/* Card Content */}
            <div className={`relative h-full w-full rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden isolate [-webkit-mask-image:radial-gradient(white,black)] transition-all duration-500 ${!isActive ? 'opacity-50' : ''}`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                    {isWatchingTab ? (
                        <>
                            {/* Blurred Background for Fill */}
                            <img
                                src={item.image}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110"
                                aria-hidden="true"
                            />
                            {/* Main Image Contained */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="relative w-full h-full object-contain z-10 transition-transform duration-700 group-hover:scale-105"
                            />
                        </>
                    ) : (
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent z-20" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-10 flex flex-col justify-end items-start text-left transform-style-3d translate-z-10 z-30">

                    {/* Tags */}
                    {item.tags && (
                        <div className="flex flex-wrap gap-2 mb-2 md:mb-4">
                            {item.tags.map((tag: string, i: number) => (
                                <span key={i} className="px-2.5 py-0.5 md:px-3 md:py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-[10px] md:text-xs font-medium text-white/90">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="space-y-1 mb-2 md:mb-4">
                        <span className={`text-[10px] md:text-sm font-bold tracking-wider uppercase ${item.color || 'text-gray-400'}`}>
                            {item.subtitle}
                        </span>
                        <h3 className="text-base md:text-xl font-bold text-white line-clamp-2">
                            {item.title}
                        </h3>
                    </div>

                    {/* Rating & Season Info - Only for Watching tab */}
                    {isWatchingTab && (item.rating || item.season) && (
                        <div className="flex items-center gap-3 mb-4 text-sm">
                            {item.rating && (
                                <span className="flex items-center gap-1 px-2.5 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-400 font-semibold">
                                    ⭐ {item.rating.toFixed(1)}
                                </span>
                            )}
                            {item.season && (
                                <span className="px-2.5 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 font-medium">
                                    {item.season}
                                </span>
                            )}
                            {item.episodes && (
                                <span className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 font-medium">
                                    {item.episodes} EPS
                                </span>
                            )}
                            {item.airingStatus && (
                                <span className={`px-2.5 py-1 rounded-lg font-medium border ${item.airingStatus === 'Currently Airing'
                                    ? 'bg-green-500/20 border-green-500/30 text-green-300'
                                    : 'bg-gray-500/20 border-gray-500/30 text-gray-300'
                                    }`}>
                                    {item.airingStatus === 'Currently Airing' ? 'Airing' : 'Fused'}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Hours Played - Steam/Gaming */}
                    {item.hoursPlayed && (
                        <div className="flex items-center gap-3 mb-4 text-sm">
                            <span className="flex items-center gap-1 px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 font-semibold">
                                ⌛ {item.hoursPlayed} Hours
                            </span>
                        </div>
                    )}

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3">
                        {/* Streaming Platform - Only for Watching tab */}
                        {isWatchingTab && item.streamingPlatform && (
                            <motion.a
                                href={item.streamingPlatform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-950 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
                            >
                                <img src={crunchyrollLogo} alt="Crunchyroll" className="w-5 h-5 object-contain" />
                                {item.streamingPlatform.name}
                            </motion.a>
                        )}
                        {/* Generic View Link */}
                        {item.link && (
                            <motion.a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-colors ${isWatchingTab
                                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                                    : 'bg-white text-gray-950 hover:bg-gray-100'
                                    }`}
                            >
                                {item.id === 'gaming' ? (
                                    <>
                                        <img src={steamLogo} alt="Steam" className="w-5 h-5 object-contain" />
                                        Steam
                                    </>
                                ) : (
                                    <>
                                        {isWatchingTab ? 'MAL' : 'Details'}
                                        <ExternalLink className="w-4 h-4" />
                                    </>
                                )}
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
        </motion.div>
    )
}

const LiveStatus = () => {
    const [activeTabId, setActiveTabId] = useState(liveStatus[0].id);
    const [statusData, setStatusData] = useState(liveStatus);
    const [carouselState, setCarouselState] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false, // We use custom nav or click-to-slide
        config: config.gentle
    });

    const activeItem = statusData.find(item => item.id === activeTabId) || statusData[0];

    // Get color for background glow
    const glowColor = activeItem.color ? activeItem.color.replace('text-', 'bg-').replace('400', '500') : 'bg-blue-500';

    // Adjust carousel config based on screen size
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setCarouselState(prev => ({ ...prev, offsetRadius: 1 }));
            } else {
                setCarouselState(prev => ({ ...prev, offsetRadius: 2 }));
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fetch Anime Data from Jikan API for Watching tab
    useEffect(() => {
        const fetchAnimeData = async () => {
            const watchingItem = statusData.find(item => item.id === 'watching');
            if (!watchingItem?.subItems) return;

            // Collect all MAL IDs that need fetching
            // We fetch if we have a malId, regardless of if we have data already, to ensure freshness (or at least image updates)
            // But to save requests, let's only fetch if missing rating OR image is the placeholder/static one?
            // Actually, static images are fine, but user asked to utilise jpg from jikan.
            // Let's just fetch all items with malId to populate dynamic fields.
            const itemsWithMalId = watchingItem.subItems.filter(item => item.malId);
            if (itemsWithMalId.length === 0) return;

            // Fetch data for each anime (with rate limiting - Jikan has 3 req/sec limit)
            const updatedSubItems = [...watchingItem.subItems];

            for (let i = 0; i < itemsWithMalId.length; i++) {
                const item = itemsWithMalId[i];
                // Skip if we already fetched dynamic data (optimization: check if episodes is set, as it wasn't there before)
                if (item.episodes) continue;

                try {
                    // Add delay for rate limiting (350ms between requests)
                    if (i > 0) await new Promise(r => setTimeout(r, 350));

                    const res = await fetch(`https://api.jikan.moe/v4/anime/${item.malId}`);
                    if (res.ok) {
                        const data = await res.json();
                        const anime = data.data;

                        if (anime) {
                            // Find and update the item in our array
                            const idx = updatedSubItems.findIndex(si => si.malId === item.malId);
                            if (idx !== -1) {
                                updatedSubItems[idx] = {
                                    ...updatedSubItems[idx],
                                    rating: anime.score ?? updatedSubItems[idx].rating, // Use nullish coalescing to keep fallback if API null
                                    image: anime.images?.jpg?.large_image_url || updatedSubItems[idx].image,
                                    episodes: anime.episodes,
                                    airingStatus: anime.status,
                                    title: anime.title_english || anime.title || updatedSubItems[idx].title
                                };
                            }
                        }
                    }
                } catch {
                    // Silently fail for individual items
                }
            }

            // Update state with fetched data
            setStatusData(prev => prev.map(item => {
                if (item.id === 'watching') {
                    return { ...item, subItems: updatedSubItems };
                }
                return item;
            }));
        };

        fetchAnimeData();
    }, []); // Run once on mount

    // Fetch Steam Data (Same logic as before)
    useEffect(() => {
        const fetchSteamData = async () => {
            try {
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
                                image: data.game.image || item.image,
                                link: data.game.link,
                                tags: ["Steam", "Live Status", "PC"],
                                hoursPlayed: data.game.hoursPlayed
                            };
                        }
                        return item;
                    }));
                }
            } catch {
                // Silently fail in dev
            }
        };
        fetchSteamData();
        const interval = setInterval(fetchSteamData, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    // Prepare slides for react-spring-3d-carousel
    const itemsToShow = activeItem.subItems && activeItem.subItems.length > 0 ? activeItem.subItems : [activeItem];

    // Fix for 2 items: Duplicate them to create a 4-item carousel for better 3D effect
    const renderedItems = itemsToShow.length === 2 ? [...itemsToShow, ...itemsToShow] : itemsToShow;

    // We need to maintain stable keys strictly, so we'll wrap this in a way that key depends on index/id
    const isWatchingTab = activeTabId === 'watching';

    const slides = renderedItems.map((item: LiveStatusItem | LiveStatusContent, index: number) => {
        const isActive = index === carouselState.goToSlide;
        // Check if item has color property (is LiveStatusItem), otherwise use activeItem.color
        const itemColor = 'color' in item ? item.color : activeItem.color;

        return {
            key: `${activeTabId}-${index}`, // Stable key based on tab and index
            content: (
                <div onClick={() => setCarouselState({ ...carouselState, goToSlide: index })}>
                    <TiltCard
                        item={{ ...item, color: itemColor }}
                        isActive={isActive}
                        isWatchingTab={isWatchingTab}
                    />
                </div>
            ),
            onClick: () => setCarouselState({ ...carouselState, goToSlide: index })
        };
    });

    // Reset slide index when tab changes
    useEffect(() => {
        setCarouselState(prev => ({ ...prev, goToSlide: 0 }));
    }, [activeTabId]);


    return (
        <section className="relative py-20 px-4 overflow-hidden" id="live-status">

            {/* Background Decor */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ${glowColor}/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-700`} />

            <div className="relative max-w-6xl mx-auto space-y-12">

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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-grotesk font-bold text-gradient mb-3 sm:text-4xl"
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

                {/* Content Area */}
                <div className="flex justify-center min-h-[350px] md:min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTabId}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-[350px] md:h-[500px] relative" // Fixed height for carousel
                        >
                            {renderedItems.length > 1 ? (
                                <Carousel
                                    slides={slides}
                                    goToSlide={carouselState.goToSlide}
                                    offsetRadius={carouselState.offsetRadius}
                                    showNavigation={carouselState.showNavigation}
                                    animationConfig={carouselState.config}
                                />
                            ) : (
                                <div className="flex justify-center items-center h-full">
                                    <TiltCard item={activeItem} isActive={true} isWatchingTab={isWatchingTab} />
                                </div>
                            )}

                            {/* Mobile Navigation Controls */}
                            {renderedItems.length > 1 && (
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-2 md:hidden pointer-events-none">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCarouselState(prev => ({
                                                ...prev,
                                                goToSlide: (prev.goToSlide - 1 + renderedItems.length) % renderedItems.length
                                            }));
                                        }}
                                        className="pointer-events-auto p-3 bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full text-white/90 hover:text-white shadow-lg transition-transform active:scale-95"
                                        aria-label="Previous slide"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCarouselState(prev => ({
                                                ...prev,
                                                goToSlide: (prev.goToSlide + 1) % renderedItems.length
                                            }));
                                        }}
                                        className="pointer-events-auto p-3 bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full text-white/90 hover:text-white shadow-lg transition-transform active:scale-95"
                                        aria-label="Next slide"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default LiveStatus;
