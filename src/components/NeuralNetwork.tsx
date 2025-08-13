// components/NeuralNetwork.tsx
"use client";
import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

export default function NeuralNetwork({
                                          density = 0.00014,      // densidade de nós por px²
                                          linkDist = 140,         // distância para ligar nós
                                          hoverForce = 0.12,      // força de atração ao mouse
                                          repel = false,          // true para repelir
                                          className = "",
                                      }: {
    density?: number;
    linkDist?: number;
    hoverForce?: number;
    repel?: boolean;
    className?: string;
}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouse = useRef<{ x: number; y: number; inside: boolean }>({ x: 0, y: 0, inside: false });
    const nodesRef = useRef<Node[]>([]);
    const rafRef = useRef<number | null>(null);
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let W = 0, H = 0;

        const rand = (a = 1) => (Math.random() - 0.5) * a;
        const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

        function resize() {
            const parent = canvas.parentElement!;
            W = parent.clientWidth; H = parent.clientHeight;
            canvas.width = Math.floor(W * dpr);
            canvas.height = Math.floor(H * dpr);
            canvas.style.width = W + "px";
            canvas.style.height = H + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // (re)cria nós conforme densidade da área
            const target = Math.floor(W * H * density);
            nodesRef.current = Array.from({ length: target }, () => ({
                x: Math.random() * W,
                y: Math.random() * H,
                vx: rand(0.6),
                vy: rand(0.6),
                r: 1.2 + Math.random() * 1.8,
            }));
        }

        function drawBackgroundGlow() {
            const cx = W * 0.55, cy = H * 0.45, r = Math.max(W, H) * 0.55;
            const g = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r);
            g.addColorStop(0, "rgba(0, 180, 220, 0.25)");
            g.addColorStop(1, "rgba(2, 10, 20, 0)");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
        }

        function step() {
            const nodes = nodesRef.current;
            ctx.clearRect(0, 0, W, H);
            drawBackgroundGlow();

            // ligações
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];
                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < linkDist) {
                        const alpha = 1 - dist / linkDist;
                        ctx.strokeStyle = `rgba(0,190,230,${alpha * 0.45})`;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            // nós
            ctx.shadowColor = "rgba(0,200,255,0.55)";
            ctx.shadowBlur = 8;
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];

                // interação com mouse
                if (mouse.current.inside) {
                    const mx = mouse.current.x, my = mouse.current.y;
                    const dx = mx - n.x, dy = my - n.y;
                    const d = Math.hypot(dx, dy) || 1;
                    const force = (hoverForce * (repel ? -1 : 1)) / (d * 0.02);
                    n.vx += (dx / d) * force;
                    n.vy += (dy / d) * force;
                }

                // movimento + “fricção”
                n.x += n.vx;
                n.y += n.vy;
                n.vx *= 0.985;
                n.vy *= 0.985;

                // bordas (wrap suave)
                if (n.x < -20) n.x = W + 20;
                if (n.x > W + 20) n.x = -20;
                if (n.y < -20) n.y = H + 20;
                if (n.y > H + 20) n.y = -20;

                // desenha nó
                ctx.fillStyle = "rgba(180,240,255,0.9)";
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();

                // brilho interno
                const d2 = mouse.current.inside ? Math.hypot(mouse.current.x - n.x, mouse.current.y - n.y) : 9999;
                if (d2 < 90) {
                    const t = clamp(1 - d2 / 90, 0, 1);
                    ctx.fillStyle = `rgba(0,200,255,${0.35 * t})`;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, n.r + 3 + t * 3, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            rafRef.current = requestAnimationFrame(step);
        }

        function onMove(e: MouseEvent) {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = (e.clientX - rect.left);
            mouse.current.y = (e.clientY - rect.top);
            mouse.current.inside = true;
        }
        function onLeave() { mouse.current.inside = false; }

        resize();
        window.addEventListener("resize", resize);
        canvas.addEventListener("mousemove", onMove);
        canvas.addEventListener("mouseleave", onLeave);
        rafRef.current = requestAnimationFrame(step);

        return () => {
            window.removeEventListener("resize", resize);
            canvas.removeEventListener("mousemove", onMove);
            canvas.removeEventListener("mouseleave", onLeave);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [density, linkDist, hoverForce, repel, dpr]);

    return (
        <div className={`relative h-full w-full overflow-hidden rounded-2xl bg-[#0b1420] ${className}`}>
            <canvas ref={canvasRef} className="absolute inset-0" />
            {/* borda/vidro sutil */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
    );
}
