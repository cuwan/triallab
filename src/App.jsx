import React from 'react';
import {
    FlaskConical,
    ArrowRight,
    PlusCircle,
    Zap,
    Map,
    Target,
    Calendar,
    Terminal,
    Layout,
    Code2,
    Box,
    BrainCircuit
} from 'lucide-react';

const experiments = [
    {
        id: "01",
        title: "Original Match",
        desc: "Rekonstruksi dashboard dari referensi gambar. Fokus pada akurasi layout.",
        tag: "Completed",
        path: "experiments/01-original-match/index.html",
        color: "#22C55E"
    },
    {
        id: "05",
        title: "Clinical Blueprint",
        desc: "Fokus pada mental health UX. Navigasi presisi & storytelling AIDA.",
        tag: "Successful UX",
        path: "experiments/05-clinical-blueprint/index.html",
        color: "#22C55E"
    },
    {
        id: "07",
        title: "GovernX Dashboard",
        desc: "Fintech & Trading Dashboard dengan simulasi Candlestick kompleks.",
        tag: "High Performance",
        path: "experiments/07-governx-fintech/index.html",
        color: "#22C55E"
    },
    {
        id: "09",
        title: "Pro Motion Portfolio",
        desc: "Portfolio premium untuk market high-end dengan copy persuasif.",
        tag: "Premium 💎",
        path: "experiments/09-pro-portfolio/index.html",
        color: "#8B5CF6"
    },
    {
        id: "11",
        title: "AI Wealth Roadmap",
        desc: "5-year masterplan to scale from $0 to $10K/month using AI.",
        tag: "Strategic Plan 🚀",
        path: "experiments/11-ai-wealth-roadmap/index.html",
        color: "#FFA500"
    },
    {
        id: "12",
        title: "AI Motion Orchestrator",
        desc: "Sistem penjembatan perintah teks ke animasi real-time (New Loop).",
        tag: "Experimental 🧪",
        path: "experiments/12-ai-motion-orchestrator/index.html",
        color: "#3B82F6"
    }
];

function App() {
    return (
        <div className="min-h-screen bg-[#0A0A0C] text-white font-['Outfit'] selection:bg-blue-500/30">
            {/* Floating Glow */}
            <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[600px] height-[400px] bg-blue-500/10 blur-[100px] -z-10 pointer-events-none" />

            <header className="pt-20 pb-10 px-5 text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
                    <FlaskConical className="text-[#22C55E]" size={20} />
                    <span className="font-bold text-[#22C55E] tracking-[0.2em] text-sm uppercase">Laboratory</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tighter bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                    Trial & Error Lab
                </h1>
                <p className="text-[#88888E] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    Eksplorasi pembuatan Framer Dashboard & AI Systems.
                    Tempat di mana kode bertemu dengan strategi industri.
                </p>
            </header>

            <main className="max-w-7xl mx-auto px-5 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiments.map((exp) => (
                        <a
                            key={exp.id}
                            href={exp.path}
                            className="group relative bg-[#16161A] border border-white/5 rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(59,130,246,0.1)] overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: exp.color }}>
                                    Exp #{exp.id}
                                </span>
                                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/5" style={{ color: exp.color }}>
                                    {exp.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                {exp.title}
                            </h3>
                            <p className="text-[#88888E] text-sm leading-relaxed mb-8">
                                {exp.desc}
                            </p>

                            <div className="mt-auto flex items-center gap-2 text-sm font-semibold transition-all duration-300" style={{ color: exp.color }}>
                                View Experiment
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>

                            {/* Decorative Gradient */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}

                    {/* Add New Button */}
                    <div className="border-2 border-dashed border-white/10 rounded-[32px] flex flex-col items-center justify-center p-8 text-[#444] hover:border-white/20 hover:text-[#888] transition-all cursor-pointer group">
                        <PlusCircle size={48} className="mb-4 group-hover:scale-110 transition-transform" />
                        <span className="font-bold tracking-wider uppercase text-xs">Initialize Next Experiment</span>
                    </div>
                </div>
            </main>

            <footer className="py-10 text-center border-top border-white/5 text-[#444] text-xs font-medium tracking-widest uppercase">
                &copy; 2026 Antigravity Lab // AI Powered Iteration
            </footer>
        </div>
    );
}

export default App;
