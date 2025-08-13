"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import NeuralNetwork from "@/components/NeuralNetwork";
import PortfolioCard from "@/components/PortfolioCard";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
    HomeIcon, InfoIcon, CodeIcon, MailIcon, LinkedinIcon, GithubIcon, InstagramIcon,
    SmartphoneIcon, DatabaseIcon, CloudIcon, BarChartIcon, ShieldCheckIcon,
    MapPinIcon, PhoneIcon, SendIcon
} from "lucide-react";

function ScrollLink({
                        to, className, children, ariaLabel,
                    }: { to: string; className?: string; children: React.ReactNode; ariaLabel?: string }) {
    return (
        <a
            href={`#${to}`}
            aria-label={ariaLabel}
            className={className}
            onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(to);
                el?.scrollIntoView({behavior: "smooth", block: "start"});
                history.pushState(null, "", `#${to}`);
            }}
        >
            {children}
        </a>
    );
}


export default function HomePage() {
    const [active, setActive] = useState<string>("home");

    useEffect(() => {
        const ids = ["home", "sobre", "servicos", "contato"];
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
            {rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.6]}
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);


    const items = [
        {
            title: "SaaS funcional",
            subtitle: "Multi-tenant, billing e painéis",
            img: "/portfolio/saas.png",
            bullets: ["Controle financeiro", "Planos e cobrança", "Métricas em tempo real", "Calculo financeiro de impostos e investimentos", "Exportação de dados"],
        },
        {
            title: "Plataforma de eventos",
            subtitle: "Datas comemorativas e campanhas",
            img: "/portfolio/dia_das_maes.png",
            bullets: ["Agenda e inscrições", "Landing temáticas", "Ranking/gamificação", "Dashboard de gerenciamento de inscrições", "Exportação de dados"],
        },
        {
            title: "Portfólios web",
            subtitle: "Empresas e pessoais",
            img: "/portfolio/portfolio_dentistas.png",
            bullets: ["Apresentação clara e objetiva do produto", "Praticidade para entrar em contato", "Galeria de imagens", "Possibilidade de adicionar vídeos", "Acompanhar acessos", "Integração com redes sociais"],
        },
        {
            title: "Gestão de pacientes",
            subtitle: "Clínicas e psicologia",
            img: "/portfolio/gestao_psicologia.png",
            bullets: ["Prontuário eletrônico", "Agenda e lembretes automáticos", "LGPD e relatórios", "Exportação de dados", "Integração com WhatsApp", "Controle de pagamentos e cobranças"],
        },
        {
            title: "Bot de atendimento",
            subtitle: "WhatsApp/Telegram + automações",
            img: "/portfolio/bot_wpp_telegram.png",
            bullets: ["Respostas automáticas personalizadas", "Integração com CRM e sistemas existentes", "Suporte multi-idiomas", "Segurança de dados e privacidade"],
        },
        {
            title: "Controle de kcal & IMC",
            subtitle: "Dieta e perda de peso",
            img: "/portfolio/calculo_imc.png",
            bullets: ["Refeições e metas personalizadas", "IMC/TMB automático", "Gráficos de evolução", "Classificação por faixa etária e sexo", "Exportação de dados", "Relatórios inteligentes"],
        },
    ];

    const [form, setForm] = useState({name: "", email: "", subject: "", message: ""});
    const [sending, setSending] = useState(false);

    function handleMailto(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSending(true);
        const to = "kodartecnologia@gmail.com";
        const subject = encodeURIComponent(`Contato (site) — ${form.subject}`);
        const body = encodeURIComponent(
            `Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`
        );
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setTimeout(() => setSending(false), 800);
    }


    return (
        <div className="flex min-h-screen bg-black text-white">
            {/* Sidebar */}
            <aside
                className="fixed left-0 top-0 z-50 flex h-full w-20 flex-col items-center justify-between border-r border-gray-800 bg-black py-6">
                <div className="flex flex-col items-center space-y-8">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00BCD4] text-2xl font-bold text-black">K
                    </div>
                    <nav className="flex flex-col items-center space-y-6">
                        <ScrollLink to="home" ariaLabel="Home"
                                    className={active === "home" ? "text-white" : "text-gray-400 hover:text-white"}>
                            <HomeIcon className="h-6 w-6"/>
                        </ScrollLink>
                        <ScrollLink to="sobre" ariaLabel="About"
                                    className={active === "sobre" ? "text-white" : "text-gray-400 hover:text-white"}>
                            <InfoIcon className="h-6 w-6"/>
                        </ScrollLink>
                        <ScrollLink to="servicos" ariaLabel="Services"
                                    className={active === "servicos" ? "text-white" : "text-gray-400 hover:text-white"}>
                            <CodeIcon className="h-6 w-6"/>
                        </ScrollLink>
                        <ScrollLink to="contato" ariaLabel="Contact"
                                    className={active === "contato" ? "text-white" : "text-gray-400 hover:text-white"}>
                            <MailIcon className="h-6 w-6"/>
                        </ScrollLink>
                    </nav>
                </div>
                {/*<div className="flex flex-col items-center space-y-6">*/}
                {/*    <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><LinkedinIcon*/}
                {/*        className="h-6 w-6"/></Link>*/}
                {/*    <Link href="#" aria-label="GitHub" className="text-gray-400 hover:text-white"><GithubIcon*/}
                {/*        className="h-6 w-6"/></Link>*/}
                {/*    <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><InstagramIcon*/}
                {/*        className="h-6 w-6"/></Link>*/}
                {/*</div>*/}
            </aside>

            {/* Main */}
            <main className="ml-20 flex-1">
                {/* HERO */}
              <section className="relative flex h-screen items-center justify-center overflow-hidden px-8 py-16 md:px-16 lg:px-24">
                <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10" />
                <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="flex flex-col justify-center space-y-3">
                    <Image
                        src="/kodar_logo_recort.png"
                        alt="Kodar Soluções em Tecnologia"
                        width={450}
                        height={340}
                        className="mb-3"
                    />
                    <h1 className="text-2xl font-bold leading-tight md:text-2xl lg:text-6xl">
                      Transformando ideias em{" "}
                      <span className="relative text-[#00BCD4]">
                  soluções digitais
                  <span className="absolute bottom-0 left-0 h-1 w-full bg-[#00BCD4]" />
                </span>
                    </h1>
                    <p className="text-lg text-gray-400 md:text-xl">
                      Desenvolvemos tecnologias inovadoras que impulsionam o crescimento do seu negócio no mundo digital.
                    </p>
                    <div className="flex space-x-4">
                      <Button className="bg-[#00BCD4] text-black hover:bg-[#00BCD4]/90">
                        Iniciar projeto <SendIcon className="ml-2 h-4 w-4 rotate-45" />
                      </Button>
                      <Button variant="outline" className="border-[#00BCD4] text-[#00BCD4] hover:bg-[#00BCD4]/10">
                        Conheça nosso trabalho
                      </Button>
                    </div>
                  </div>
                    <div className="relative flex items-center justify-center rounded-lg overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
                        <video
                            src="/videos/video_kodar.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay azul translúcido */}
                        <div className="absolute inset-0 bg-[#00BCD4] opacity-20 mix-blend-screen" />
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500">
                  Scroll <span className="block text-center">↓</span>
                </div>
              </section>

              {/* SOBRE */}
                <section
                    id="sobre"
                    className="relative px-8 md:px-16 lg:px-24 py-20"
                >
                    {/* brilho sutil de fundo */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#00BCD4]/20 blur-3xl" />
                        <div className="absolute left-10 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                    </div>

                    <div className="mx-auto w-full max-w-7xl">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl font-bold leading-tight">
                                Sobre nós
                                <span className="mt-3 block h-1 w-24 bg-[#00BCD4]" />
                            </h2>
                            <p className="mt-4 text-lg text-gray-400">
                                Conheça nossa história e missão no mundo da tecnologia
                            </p>
                        </div>

                        {/* bloco principal */}
                        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                            {/* coluna texto */}
                            <div className="md:col-span-2 space-y-5 text-gray-300">
                                <p>
                                    A <span className="font-semibold text-white">Kodar</span> nasceu da paixão por criar soluções que realmente
                                    resolvem problemas. Reunimos <span className="font-semibold text-white">profissionais</span> com
                                    vasta experiência de mercado em <span className="text-white">produtos digitais, integrações complexas</span> e
                                    <span className="text-white"> arquitetura escalável</span>.
                                </p>
                                <p>
                                    Atuamos com uma abordagem <span className="text-white">orientada a resultados</span>, unindo boas práticas,
                                    testes e métricas para entregar software com <span className="text-white">qualidade, performance</span> e
                                    <span className="text-white"> segurança</span>.
                                </p>

                                {/* diferenciais */}
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <div className="mb-2 text-white font-medium">Time sênior & multidisciplinar</div>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BCD4]" />
                                                Front‑end moderno
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BCD4]" />
                                                Back‑end robusto
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BCD4]" />
                                                Integrações, automações e APIs
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BCD4]" />
                                                Suporte e manutenção
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                        <div className="mb-2 text-white font-medium">Como entregamos</div>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BCD4]" />
                                                Descoberta e mapeamento de requisitos
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BCD4]" />
                                                Prototipação rápida e validação com usuários
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BCD4]" />
                                                Entregas contínuas com métricas e qualidade
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00BCD4]" />
                                                Monitoramento e suporte pós-lançamento
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {/* coluna stats */}
                            <div className="grid content-start gap-4 mt-[-45px]">

                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <div className="text-4xl font-bold text-white">6+</div>
                                    <div className="mt-1 text-sm text-gray-400">anos de mercado</div>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <div className="text-4xl font-bold text-white">30+</div>
                                    <div className="mt-1 text-sm text-gray-400">projetos entregues</div>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <div className="text-4xl font-bold text-white">+12</div>
                                    <div className="mt-1 text-sm text-gray-400">segmentos atendidos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* SERVIÇOS */}
                <section id="servicos" className="px-8 py-16 md:px-16 lg:px-24">
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Nossos serviços
                        <span className="mt-2 block h-1 w-20 bg-[#00BCD4]"/>
                    </h2>
                    <p className="mb-12 text-lg text-gray-400">Soluções personalizadas para impulsionar seu negócio</p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <ServiceCard icon={<CodeIcon className="h-8 w-8 text-[#00BCD4]"/>} title="Desenvolvimento Web"
                                     description="Criamos sites e aplicações web responsivas, rápidas e seguras utilizando as tecnologias mais modernas do mercado."/>
                        <ServiceCard icon={<SmartphoneIcon className="h-8 w-8 text-[#00BCD4]"/>}
                                     title="Aplicativos Mobile"
                                     description="Desenvolvemos aplicativos nativos e híbridos para iOS e Android que oferecem experiências excepcionais aos usuários."/>
                        <ServiceCard icon={<DatabaseIcon className="h-8 w-8 text-[#00BCD4]"/>}
                                     title="Sistemas Corporativos"
                                     description="Automatizamos processos empresariais com sistemas personalizados que aumentam a produtividade e reduzem custos."/>
                        <ServiceCard icon={<CloudIcon className="h-8 w-8 text-[#00BCD4]"/>} title="Cloud & DevOps"
                                     description="Implementamos infraestruturas escaláveis e seguras na nuvem com práticas modernas de CI/CD e DevOps."/>
                        <ServiceCard icon={<BarChartIcon className="h-8 w-8 text-[#00BCD4]"/>}
                                     title="Business Intelligence"
                                     description="Transformamos dados em insights acionáveis com dashboards interativos e análises avançadas."/>
                        <ServiceCard icon={<ShieldCheckIcon className="h-8 w-8 text-[#00BCD4]"/>} title="Cibersegurança"
                                     description="Protegemos seus ativos digitais com soluções de segurança robustas e testes de penetração."/>
                    </div>
                </section>

                {/* PORTFÓLIO */}
                <section className="px-8 py-16 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {items.map((it) => (
                            <PortfolioCard
                                key={it.title}
                                title={it.title}
                                subtitle={it.subtitle}
                                img={it.img}
                                bullets={it.bullets}
                            />
                        ))}
                    </div>
                </section>

                {/* CONTATO */}
                <section id="contato" className="px-8 py-16 md:px-16 lg:px-24">
                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Coluna ESQUERDA: título, descrição e infos de contato */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold md:text-4xl">
                                Contato
                                <span className="mt-2 block h-1 w-20 bg-[#00BCD4]"/>
                            </h2>
                            <p className="text-lg text-gray-400">Vamos conversar sobre o seu próximo projeto</p>

                            <div className="space-y-6 pt-2">
                                <div className="flex items-start space-x-4">
                                    <MapPinIcon className="h-6 w-6 flex-shrink-0 text-[#00BCD4]"/>
                                    <div>
                                        <p className="font-semibold">Brasília, DF</p>
                                        <p className="text-gray-400">Brasil</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <MailIcon className="h-6 w-6 flex-shrink-0 text-[#00BCD4]"/>
                                    <div>
                                        <p className="font-semibold">kodartecnologia@gmail.com</p>
                                        <p className="text-gray-400">Resposta em até 24h</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-[#00BCD4]"/>
                                    <div>
                                        <p className="font-semibold">+55 (61) 98124-5558</p>
                                        <p className="text-gray-400">Seg - Sex, 8h - 20h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna DIREITA: formulário */}
                        <Card className="border-none bg-gray-900 p-6 self-start mr-3 -mt-4 md:-ml-20">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">Nome</label>
                                    <Input
                                        id="name"
                                        placeholder="Seu nome completo"
                                        className="bg-gray-800 text-white placeholder:text-gray-500 border-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="bg-gray-800 text-white placeholder:text-gray-500 border-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="sr-only">Assunto</label>
                                    <Input
                                        id="subject"
                                        placeholder="Do que se trata?"
                                        className="bg-gray-800 text-white placeholder:text-gray-500 border-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="sr-only">Mensagem</label>
                                    <Textarea
                                        id="message"
                                        rows={5}
                                        placeholder="Descreva seu projeto ou dúvida..."
                                        className="bg-gray-800 text-white placeholder:text-gray-500 border-none"
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-[#00BCD4] text-black hover:bg-[#00BCD4]/90">
                                    Enviar mensagem <SendIcon className="ml-2 h-4 w-4 rotate-45"/>
                                </Button>
                            </form>
                        </Card>
                    </div>
                </section>
            </main>
        </div>
    );
}

function ServiceCard({icon, title, description}: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card className="border-none bg-gray-900 p-6">
            <CardHeader className="p-0">
                <div className="mb-4">{icon}</div>
                <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-2">
                <p className="text-gray-400">{description}</p>
            </CardContent>
        </Card>
    );
}
