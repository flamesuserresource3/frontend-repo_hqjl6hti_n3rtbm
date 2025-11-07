import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, FlaskConical, Cpu, ServerCog } from 'lucide-react';

const skills = [
  { name: 'Python', level: 95 },
  { name: 'Django', level: 92 },
  { name: 'FastAPI', level: 88 },
  { name: 'TensorFlow', level: 80 },
  { name: 'PyTorch', level: 78 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'Redis & Celery', level: 82 },
];

const SkillBar = ({ name, level }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm text-white/80">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_12px_rgba(0,212,255,0.5)]"
      />
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0a0e27] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About</h2>
            <p className="mt-4 text-white/80">
              I build scalable backends with Django and FastAPI, and deliver AI/ML systems that power real products. From data pipelines to model serving and MLOps, I ship production-grade solutions end-to-end.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-cyan-300">
                  <ServerCog className="h-5 w-5" />
                  <span className="text-sm font-semibold">Scalable Backends</span>
                </div>
                <p className="mt-2 text-sm text-white/70">Django, FastAPI, Celery, Redis, Postgres, Docker</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Cpu className="h-5 w-5" />
                  <span className="text-sm font-semibold">AI/ML Systems</span>
                </div>
                <p className="mt-2 text-sm text-white/70">Modeling, vector search, inference APIs, monitoring</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
