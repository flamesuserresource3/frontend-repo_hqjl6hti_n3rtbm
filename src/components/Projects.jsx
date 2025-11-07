import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, ShoppingCart, CloudSun, Activity } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'High-performance Django platform with Redis caching and Celery workers for async tasks.',
    badges: ['Django', 'Redis', 'Celery'],
    icon: ShoppingCart,
    links: {
      demo: '#',
      github: 'https://github.com/mdahmedanjarwala105',
    },
  },
  {
    title: 'SkyCast AI Weather Assistant',
    desc: 'Conversational weather app powered by GPT-4/Gemini with contextual memory.',
    badges: ['OpenAI', 'Gemini', 'FastAPI'],
    icon: CloudSun,
    links: {
      demo: '#',
      github: 'https://github.com/mdahmedanjarwala105',
    },
  },
  {
    title: 'CKD Prediction Model',
    desc: 'End-to-end ML pipeline with data preprocessing, model training, and API deployment.',
    badges: ['Python', 'Scikit-learn', 'TensorFlow'],
    icon: Activity,
    links: {
      demo: '#',
      github: 'https://github.com/mdahmedanjarwala105',
    },
  },
];

const ProjectCard = ({ p, idx }) => {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-cyan-400/10 p-3 ring-1 ring-cyan-400/20">
          <Icon className="h-6 w-6 text-cyan-300" />
        </div>
        <h3 className="text-lg font-semibold">{p.title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/75">{p.desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.badges.map((b) => (
          <span key={b} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-cyan-200 ring-1 ring-white/10">
            {b}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <a href={p.links.demo} className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
          <ExternalLink className="h-4 w-4" /> Demo
        </a>
        <a href={p.links.github} className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
          <Github className="h-4 w-4" /> Code
        </a>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-20 rotate-12 bg-gradient-to-r from-cyan-500/20 via-emerald-400/10 to-transparent blur-2xl" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#050818] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">A selection of work spanning scalable backends and applied AI.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
