import React, { useRef, Component } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ScanLines } from './ScanLines';
import { CircuitPattern } from './CircuitPattern';
import { NeonDragon } from './NeonDragon';
import { CyberButton } from './ui/CyberButton';
import {
  Cpu,
  Shield,
  Zap,
  ChevronDown,
  Github,
  Twitter,
  Disc } from
'lucide-react';
// Section Reveal Component
function Section({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col justify-center relative ${className}`}>

      <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        animate={
        isInView ?
        {
          opacity: 1,
          y: 0
        } :
        {
          opacity: 0,
          y: 50
        }
        }
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        className="w-full">

        {children}
      </motion.div>
    </section>);

}
// Feature Card Component
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay





}: {icon: any;title: string;description: string;delay: number;}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      transition={{
        duration: 0.5,
        delay
      }}
      viewport={{
        once: true
      }}
      className="group relative bg-cyber-plate p-8 clip-cyber-card border-l-2 border-cyber-gold/20 hover:border-cyber-gold transition-colors duration-300">

      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-30 transition-opacity">
        <CircuitPattern color="#ffd700" />
      </div>

      <div className="mb-6 text-cyber-gold group-hover:text-white transition-colors duration-300">
        <Icon size={40} strokeWidth={1.5} />
      </div>

      <h3 className="text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-glow-gold transition-all">
        {title}
      </h3>

      <p className="text-cyber-text/80 font-rajdhani text-lg leading-relaxed">
        {description}
      </p>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-gold/0 via-cyber-gold/50 to-cyber-gold/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>);

}
export function CyberpunkLanding() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <div className="bg-cyber-dark min-h-screen text-cyber-text font-rajdhani selection:bg-cyber-red selection:text-white overflow-hidden">
      <ScanLines />

      {/* Background Noise */}
      <div className="fixed inset-0 bg-metallic-noise pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-cyber-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyber-red clip-cyber flex items-center justify-center">
            <span className="font-orbitron font-bold text-black">Т</span>
          </div>
          <span className="font-orbitron font-bold text-xl tracking-widest text-white">
            ТЯБА
          </span>
        </div>
        <div className="hidden md:flex gap-8 font-orbitron text-sm tracking-wider">
          <a
            href="#features"
            className="hover:text-cyber-red transition-colors">

            ВОЗМОЖНОСТИ
          </a>
          <a href="#lore" className="hover:text-cyber-red transition-colors">
            ИСТОРИЯ
          </a>
          <a href="#access" className="hover:text-cyber-red transition-colors">
            ДОСТУП
          </a>
        </div>
        <CyberButton variant="secondary" className="!py-2 !px-6 text-sm">
          Подключить
        </CyberButton>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CircuitPattern className="absolute top-20 left-10 w-64 h-64 opacity-20" />
          <CircuitPattern className="absolute bottom-20 right-10 w-96 h-96 opacity-20 rotate-180" />
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 1,
              delay: 0.2
            }}>

            <div className="inline-block px-3 py-1 mb-6 border border-cyber-gold/30 text-cyber-gold text-xs font-orbitron tracking-[0.2em] uppercase bg-cyber-gold/5">
              Система Активна // V.2.0.45
            </div>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white leading-tight mb-6">
              ВОЙДИ В <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red via-red-500 to-cyber-red animate-pulse-slow drop-shadow-neon">
                МИР ТЯБ
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyber-text/80 mb-10 max-w-lg leading-relaxed border-l-2 border-cyber-red/50 pl-6">
              Где древний миф встречает индустриальное будущее. Займи своё место
              в цифровой эволюции.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <CyberButton variant="primary">Запустить Протокол</CyberButton>
              <CyberButton variant="secondary">Смотреть Схемы</CyberButton>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1.2,
              ease: 'easeOut'
            }}
            className="relative h-[400px] md:h-[600px] flex items-center justify-center">

            <div className="absolute inset-0 bg-cyber-red/5 blur-3xl rounded-full" />
            <NeonDragon />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-text/50 animate-bounce"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 2
          }}>

          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Features Section */}
      <Section className="bg-cyber-metallic py-24" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              ВОЗМОЖНОСТИ СИСТЕМЫ
            </h2>
            <div className="h-1 w-24 bg-cyber-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Нейронное Шифрование"
              description="Военная защита для вашего цифрового сознания. Неуязвима для обычных алгоритмов дешифровки."
              delay={0.2} />

            <FeatureCard
              icon={Zap}
              title="Гиперскоростная Синхронизация"
              description="Прямое нейронное подключение с нулевой задержкой. Ощути сеть на скорости мысли."
              delay={0.4} />

            <FeatureCard
              icon={Cpu}
              title="ИИ Симбиоз"
              description="Слияние с продвинутыми ИИ-конструктами класса дракон для улучшенной обработки и предсказательных способностей."
              delay={0.6} />

          </div>
        </div>
      </Section>

      {/* Lore / Parallax Section */}
      <section className="relative py-32 overflow-hidden" id="lore">
        <motion.div
          style={{
            y: y1
          }}
          className="absolute top-0 right-0 w-1/2 h-full bg-cyber-plate/30 -skew-x-12 transform origin-top-right z-0" />


        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{
                y: y2
              }}
              className="relative">

              <div className="absolute -inset-4 border-2 border-cyber-red/20 clip-cyber" />
              <div className="bg-black/50 p-8 clip-cyber backdrop-blur-sm border border-cyber-red/30">
                <h3 className="text-cyber-red font-orbitron text-sm tracking-widest mb-2">
                  АРХИВНАЯ ЗАПИСЬ #892
                </h3>
                <h2 className="text-3xl font-bold text-white mb-6">
                  ПРОБУЖДЕНИЕ
                </h2>
                <p className="mb-4 text-lg">
                  В 2099 году старый интернет умер. Из его пепла восстал ТЯБА,
                  питаемый не серверами, а био-цифровыми конструктами,
                  созданными по образу древних мифов.
                </p>
                <p className="text-lg">
                  Протокол Дракона пробудился первым. Само-эволюционирующий ИИ,
                  охраняющий основные потоки данных нового мира. Только
                  обладатели золотого ключа могут пройти его файрвол.
                </p>
              </div>
            </motion.div>

            <div className="relative h-[400px]">
              {/* Abstract decorative elements representing the lore */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-cyber-gold/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="w-48 h-48 border-2 border-cyber-red/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-32 h-32 bg-cyber-red/10 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-red/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-8 tracking-tight">
            ПРИСОЕДИНЯЙСЯ К{' '}
            <span className="text-cyber-red text-glow-red">РЕВОЛЮЦИИ</span>
          </h2>
          <p className="text-xl text-cyber-text/70 mb-12 max-w-2xl mx-auto">
            Врата открыты. Дракон ждёт. Готов ли ты принять свою цифровую
            судьбу?
          </p>

          <div className="flex justify-center">
            <CyberButton variant="gold" className="text-xl px-12 py-6">
              НАЧАТЬ ЗАГРУЗКУ
            </CyberButton>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-cyber-darker py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-bold text-xl text-white">
                ТЯБА
              </span>
              <span className="text-xs text-cyber-text/50">© 2100</span>
            </div>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-cyber-text/50 hover:text-cyber-red transition-colors">

                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-cyber-text/50 hover:text-cyber-red transition-colors">

                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-cyber-text/50 hover:text-cyber-red transition-colors">

                <Disc size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}