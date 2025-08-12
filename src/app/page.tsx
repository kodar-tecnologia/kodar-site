import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HomeIcon, InfoIcon, CodeIcon, MailIcon, LinkedinIcon, GithubIcon, InstagramIcon, SmartphoneIcon, DatabaseIcon, CloudIcon, BarChartIcon, ShieldCheckIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react'

export default function HomePage() {
  return (
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar Navigation */}
        <aside className="fixed left-0 top-0 z-50 flex h-full w-20 flex-col items-center justify-between border-r border-gray-800 bg-black py-6">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00BCD4] text-2xl font-bold text-black">
              K
            </div>
            <nav className="flex flex-col items-center space-y-6">
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="Home">
                <HomeIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="About">
                <InfoIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="Services">
                <CodeIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white" aria-label="Contact">
                <MailIcon className="h-6 w-6" />
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <Link href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white" aria-label="GitHub">
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-20 flex-1">
          {/* Hero Section */}
          <section className="relative flex h-screen items-center justify-center overflow-hidden px-8 py-16 md:px-16 lg:px-24">
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <Image
                    src="/placeholder.svg?height=40&width=150"
                    alt="Kodar Soluções em Tecnologia"
                    width={150}
                    height={40}
                    className="mb-4"
                />
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
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
              <div className="relative flex items-center justify-center">
                <div className="h-[300px] w-full rounded-lg bg-gray-900 md:h-[400px] lg:h-[500px]" />
                {/* Subtle blue glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full bg-[#00BCD4] opacity-20 blur-3xl" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500">
              Scroll <span className="block text-center">↓</span>
            </div>
          </section>

          {/* About Us Section */}
          <section className="px-8 py-16 md:px-16 lg:px-24">
            <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Sobre nós
                  <span className="mt-2 block h-1 w-20 bg-[#00BCD4]" />
                </h2>
                <p className="text-lg text-gray-400">Conheça nossa história e missão no mundo da tecnologia</p>
                <p className="text-gray-300">
                  A Kodar nasceu da paixão por criar soluções tecnológicas que realmente fazem a diferença. Somos uma equipe de
                  especialistas dedicados a transformar desafios complexos em produtos digitais elegantes e funcionais.
                </p>
                <p className="text-gray-300">
                  Com mais de 5 anos de experiência no mercado, combinamos conhecimento técnico avançado com uma abordagem
                  centrada no cliente para entregar resultados excepcionais em cada projeto.
                </p>
                <p className="text-gray-300">
                  Nossa missão é democratizar o acesso à tecnologia de ponta, ajudando empresas de todos os tamanhos a
                  prosperarem na era digital.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="h-[300px] w-full rounded-lg bg-gray-900 md:h-[400px] lg:h-[500px]" />
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 rounded-lg border border-gray-800 opacity-50" />
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="px-8 py-16 md:px-16 lg:px-24">
            <h2 className="text-3xl font-bold md:text-4xl">
              Nossos serviços
              <span className="mt-2 block h-1 w-20 bg-[#00BCD4]" />
            </h2>
            <p className="mb-12 text-lg text-gray-400">Soluções personalizadas para impulsionar seu negócio</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                  icon={<CodeIcon className="h-8 w-8 text-[#00BCD4]" />}
                  title="Desenvolvimento Web"
                  description="Criamos sites e aplicações web responsivas, rápidas e seguras utilizando as tecnologias mais modernas do mercado."
              />
              <ServiceCard
                  icon={<SmartphoneIcon className="h-8 w-8 text-[#00BCD4]" />}
                  title="Aplicativos Mobile"
                  description="Desenvolvemos aplicativos nativos e híbridos para iOS e Android que oferecem experiências excepcionais aos usuários."
              />
              <ServiceCard
                  icon={<DatabaseIcon className="h-8 w-8 text-[#00BCD4]" />}
                  title="Sistemas Corporativos"
                  description="Automatizamos processos empresariais com sistemas personalizados que aumentam a produtividade e reduzem custos."
              />
              <ServiceCard
                  icon={<CloudIcon className="h-8 w-8 text-[#00BCD4]" />}
                  title="Cloud & DevOps"
                  description="Implementamos infraestruturas escaláveis e seguras na nuvem com práticas modernas de CI/CD e DevOps."
              />
              <ServiceCard
                  icon={<BarChartIcon className="h-8 w-8 text-[#00BCD4]" />}
                  title="Business Intelligence"
                  description="Transformamos dados em insights acionáveis com dashboards interativos e análises avançadas."
              />
              <ServiceCard
                  icon={<ShieldCheckIcon className="h-8 w-8 text-[#00BCD4]" />}
                  title="Cibersegurança"
                  description="Protegemos seus ativos digitais com soluções de segurança robustas e testes de penetração."
              />
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="px-8 py-16 md:px-16 lg:px-24">
            <h2 className="text-3xl font-bold md:text-4xl">
              Portfólio
              <span className="mt-2 block h-1 w-20 bg-[#00BCD4]" />
            </h2>
            <p className="mb-12 text-lg text-gray-400">Conheça alguns dos nossos projetos de sucesso</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
            </div>
          </section>

          {/* Contact Section */}
          <section className="px-8 py-16 md:px-16 lg:px-24">
            <h2 className="text-3xl font-bold md:text-4xl">
              Contato
              <span className="mt-2 block h-1 w-20 bg-[#00BCD4]" />
            </h2>
            <p className="mb-12 text-lg text-gray-400">Vamos conversar sobre o seu próximo projeto</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 flex-shrink-0 text-[#00BCD4]" />
                  <div>
                    <p className="font-semibold">Av. Paulista, 1000 - São Paulo</p>
                    <p className="text-gray-400">Brasil</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MailIcon className="h-6 w-6 flex-shrink-0 text-[#00BCD4]" />
                  <div>
                    <p className="font-semibold">contato@kodar.tech</p>
                    <p className="text-gray-400">Resposta em até 24h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-[#00BCD4]" />
                  <div>
                    <p className="font-semibold">+55 (11) 9999-8888</p>
                    <p className="text-gray-400">Seg - Sex, 9h - 18h</p>
                  </div>
                </div>
              </div>
              <Card className="border-none bg-gray-900 p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Nome
                    </label>
                    <Input id="name" placeholder="Seu nome completo" className="bg-gray-800 text-white placeholder:text-gray-500 border-none" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="bg-gray-800 text-white placeholder:text-gray-500 border-none" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="sr-only">
                      Assunto
                    </label>
                    <Input id="subject" placeholder="Do que se trata?" className="bg-gray-800 text-white placeholder:text-gray-500 border-none" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Descreva seu projeto ou dúvida..." rows={5} className="bg-gray-800 text-white placeholder:text-gray-500 border-none" />
                  </div>
                  <Button type="submit" className="w-full bg-[#00BCD4] text-black hover:bg-[#00BCD4]/90">
                    Enviar mensagem <SendIcon className="ml-2 h-4 w-4 rotate-45" />
                  </Button>
                </form>
              </Card>
            </div>
          </section>
        </main>
      </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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
  )
}

function PortfolioCard() {
  return <Card className="h-64 border-none bg-gray-900" />
}
