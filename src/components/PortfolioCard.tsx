// components/PortfolioCard.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
    title: string;
    subtitle?: string;
    img: string;
    bullets: string[];
    className?: string;
};

export default function PortfolioCard({
                                          title,
                                          subtitle,
                                          img,
                                          bullets,
                                          className = "",
                                      }: Props) {
    const [flipped, setFlipped] = useState(false);

    return (
        <button
            type="button"
            onClick={() => setFlipped((s) => !s)}
            aria-pressed={flipped}
            aria-label={`Ver detalhes de ${title}`}
            title={title}
            className={`group relative
                  h-64 sm:h-72 md:h-72 lg:h-72  /* ↑ mais alto no mobile/sm */
                  w-full overflow-hidden
                  rounded-2xl border border-white/10 bg-white/5
                  transition-shadow duration-300 hover:shadow-[0_0_0_2px_rgba(0,188,212,0.25)]
                  [perspective:1200px] focus:outline-none focus:ring-2 focus:ring-cyan-500/40 ${className}`}
        >
            <div
                className={`absolute inset-0 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out
                    [transform-style:preserve-3d]
                    ${flipped
                    ? "[transform:rotateY(180deg)]"
                    : "motion-safe:group-hover:[transform:rotateY(180deg)]"}`}
            >
                {/* Frente */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1420] via-[#0b1420]/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-2 py-1 text-[11px] sm:text-xs text-cyan-300">
                            <span className="h-2 w-2 rounded-full bg-[#00BCD4]" />
                            Projeto Kodar
                        </div>
                        <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white text-left">{title}</h3>
                        {subtitle && <p className="text-xs sm:text-sm text-gray-300 text-left">{subtitle}</p>}
                    </div>
                </div>

                {/* Verso */}
                <div
                    className="absolute inset-0 rounded-2xl border border-white/10 bg-[#0b1420]/95
                     p-3 sm:p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                >
                    <h3 className="text-base sm:text-lg font-semibold text-white text-left">{title}</h3>
                    {subtitle && <p className="text-xs sm:text-sm text-gray-400 text-left">{subtitle}</p>}

                    <ul
                        className="mt-3 space-y-2 text-[13px] sm:text-sm text-gray-300
                       text-left leading-snug break-words whitespace-normal"
                    >
                        {bullets.map((b, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2"
                            >
                                <span className="mt-1.5 h-2.5 w-2.5 flex-none rounded-full bg-[#00BCD4]" />
                                <span className="block">{b}</span> {/* ↑ garante quebra natural e alinhado à esquerda */}
                            </li>
                        ))}
                    </ul>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20
                          bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl" />
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 sm:h-40 w-32 sm:w-40 rounded-full bg-[#00BCD4]/15 blur-3xl" />
        </button>
    );
}
