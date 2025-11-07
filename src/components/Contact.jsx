import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0a0e27] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Get in touch</h2>
        <p className="mt-2 text-white/70">Based in Bhayandar, Maharashtra, India</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <a href="mailto:mdahmedanjarwala105@gmail.com" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10">
              <Mail className="h-5 w-5 text-cyan-300" />
              <span className="text-sm">mdahmedanjarwala105@gmail.com</span>
            </a>
            <a href="tel:+917700071554" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10">
              <Phone className="h-5 w-5 text-cyan-300" />
              <span className="text-sm">+91 7700071554</span>
            </a>
            <a href="https://linkedin.com/in/mohammed-ahmed-aarif-anjarwala" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10">
              <Linkedin className="h-5 w-5 text-cyan-300" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/mdahmedanjarwala105" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10">
              <Github className="h-5 w-5 text-cyan-300" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input required placeholder="Name" className="rounded-lg border border-white/10 bg-[#0a0e27] px-3 py-2 text-sm outline-none ring-cyan-500/30 focus:ring" />
              <input required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-[#0a0e27] px-3 py-2 text-sm outline-none ring-cyan-500/30 focus:ring" />
            </div>
            <input placeholder="Subject" className="mt-3 w-full rounded-lg border border-white/10 bg-[#0a0e27] px-3 py-2 text-sm outline-none ring-cyan-500/30 focus:ring" />
            <textarea required rows="4" placeholder="Message" className="mt-3 w-full rounded-lg border border-white/10 bg-[#0a0e27] px-3 py-2 text-sm outline-none ring-cyan-500/30 focus:ring" />
            <button className="mt-4 w-full rounded-lg bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-[#0a0e27] shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">Send</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
