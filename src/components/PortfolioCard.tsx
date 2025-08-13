// components/PortfolioCard.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
    title: string;
    subtitle?: string;
    img: string;            // ex: "/portfolio/saas.jpg" (coloque em /public/portfolio)
    bullets: string[];
    className?: string;
};

export default function PortfolioCard({ title, subtitle, img, bullets, className = "" }: Props) {
    const [flipped, setFlipped] = useState(false);

    return (
        <button
            type="button"
            onClick={() => setFlipped((s) => !s)} // suporte a toque (mobile)
            className={`group relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 
                  transition-shadow duration-300 hover:shadow-[0_0_0_2px_rgba(0,188,212,0.25)]
                  [perspective:1200px] focus:outline-none focus:ring-2 focus:ring-cyan-500/40 ${className}`}
        >
            <div
                className={`absolute inset-0 transition-transform duration-500 ease-out [transform-style:preserve-3d]
                    ${flipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
            >
                {/* Frente */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <Image src={img} alt={title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1420] via-[#0b1420]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-xs text-cyan-300">
                            <span className="h-2 w-2 rounded-full bg-[#00BCD4]" />
                            Projeto Kodar
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
                        {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
                    </div>
                </div>

                {/* Verso */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 bg-[#0b1420]/95 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                        {bullets.map((b, i) => (
                            <li key={i} className="flex gap-2">
                                <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-[#00BCD4]" />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00BCD4]/15 blur-3xl" />
        </button>
    );
}
