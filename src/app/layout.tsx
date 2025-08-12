import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils" // Certifique-se de que esta importação está correta

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Kodar Soluções Digitais",
    description: "Transformando ideias em soluções digitais.",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR" className="dark"> {/* Adiciona a classe 'dark' aqui */}
        <body className={cn(inter.className, "bg-black text-white antialiased")}> {/* Garante fundo preto e texto branco */}
        {children}
        </body>
        </html>
    )
}
