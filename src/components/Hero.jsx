import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Download, Play, Brain, Database, Code2, Layers } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const phrases = ['AI/ML Engineer', 'Full-Stack Developer', 'Data Scientist'];

function useTypingCycler(words, speed = 90, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(() => setSubIndex((v) => v + (deleting ? -1 : 1)), deleting ? speed / 1.8 : speed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, speed, pause]);

  return words[index % words.length].substring(0, subIndex);
}

const FloatingIcon = ({ Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: [10, -10, 10], opacity: 1 }}
    transition={{ repeat: Infinity, duration: 6, delay, ease: 'easeInOut' }}
    className={`backdrop-blur-md rounded-xl p-3 shadow-lg/30 shadow-cyan-500/20 border border-white/10 ${className}`}
  >
    <Icon className="h-5 w-5 text-cyan-300" />
  </motion.div>
);

const Hero = () => {
  const typed = useTypingCycler(phrases);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const prevent = (e) => e.preventDefault();
    el.addEventListener('dragstart', prevent);
    return () => el.removeEventListener('dragstart', prevent);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0e27] text-white">
      <div ref={containerRef} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0e27]/40 via-[#0a0e27]/60 to-[#0a0e27]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center sm:pt-36 lg:pt-40">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-300" />
            <span className="text-xs font-medium tracking-wide text-cyan-200">Building Intelligent Systems with Code & Data</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Mohammed Ahmed Aarif Anjarwala
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-white/80">
            <span className="font-mono text-cyan-300">{typed}</span>
            <span className="ml-1 animate-pulse">|</span>
          </p>

          <p className="mx-auto max-w-2xl text-white/70">
            Python/Django developer crafting scalable backends, production AI/ML pipelines, and data-driven products.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 px-5 py-3 text-sm font-semibold text-[#0a0e27] shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
              <Play className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              View Projects
            </a>
            <a
              href="https://drive.google.com" /* Replace with actual resume link */
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="pointer-events-none relative mt-12 h-24 w-full max-w-4xl">
          <div className="absolute left-4 top-2">
            <FloatingIcon Icon={Code2} />
          </div>
          <div className="absolute left-1/3 top-0">
            <FloatingIcon Icon={Brain} delay={0.6} />
          </div>
          <div className="absolute right-1/3 bottom-0">
            <FloatingIcon Icon={Database} delay={1.2} />
          </div>
          <div className="absolute right-6 top-4">
            <FloatingIcon Icon={Layers} delay={1.8} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
