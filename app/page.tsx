"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Globe, Mail, ExternalLink, Github, Linkedin, Twitter } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

const projectData = [
  {
    title: "Travel Bug",
    tagline: "Independent Travel Advisor",
    url: "https://travelbug-v1.vercel.app",
    description: "A vibrant, user-centric platform connecting travelers with expert advisors. Love Island-inspired aesthetics with tropical gradient colors and seamless booking flows.",
    tech: ["Next.js", "Tailwind CSS"],
    gradient: "from-pink-500 to-violet-500"
  },
  {
    title: "Rei Bridal",
    tagline: "Luxury Bridal Boutique",
    url: "https://reibridal-v1.vercel.app",
    description: "Premium bridal boutique with magazine-quality editorial aesthetics. Showcasing modern, cool brides with sophisticated animations and private styling services.",
    tech: ["Next.js", "Tailwind CSS", "Custom Typography"],
    gradient: "from-amber-400 to-yellow-600"
  },
  {
    title: "Sensory Play Zone",
    tagline: "Kids Sensory & Messy Play Zone",
    url: "https://sensory-play-zone.vercel.app",
    description: "Colorful, playful environment for children's sensory development. Parents can book drop-in sessions or term memberships while kids explore structured play zones.",
    tech: ["Next.js", "Tailwind CSS", "React Icons"],
    gradient: "from-cyan-400 to-emerald-400"
  }
];

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    description: "From concept to deployment. Responsive, accessible, performance-optimized solutions powered by Next.js and modern frameworks. We build scalable architectures that grow with your vision."
  },
  {
    icon: Palette,
    title: "Brand Identity & UI Design",
    description: "Logo design and comprehensive brand systems. Custom color palettes, distinctive typography, and component libraries that create consistent, memorable digital experiences."
  },
  {
    icon: Globe,
    title: "Deployment & Infrastructure",
    description: "Seamless deployments on Vercel, Netlify, and cloud platforms. CI/CD automation, performance monitoring, and SEO optimization to ensure your site performs at its best."
  },
  {
    icon: Mail,
    title: "Ongoing Support",
    description: "Content updates and continuous feature iterations. Bug fixes, security patches, and detailed analytics reports to keep your digital presence thriving."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl font-bold mb-6"
          >
            Evolution Media Group
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-light mb-12 gradient-text"
          >
            Autonomous design, human craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 glow-hover"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-medium transition-all duration-300"
            >
              Start a Project
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-[#0f0f0f] to-[#000000]" id="about">
        <motion.div
          {...fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="gradient-text">The Future of Web</span> is Now
          </motion.h2>

          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              At Evolution Media Group, we're not just building websites — we're architecting digital experiences for an autonomous future. We believe the next generation of web is one where intelligent systems learn from usage data, optimize user journeys, and iterate designs autonomously, while humans focus on creativity, strategy, and judgment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our approach combines cutting-edge automation with artisanal craft. We deploy autonomous testing pipelines, AI-assisted design iterations, and data-driven user testing to ensure every pixel serves a purpose. Systems handle the optimization loop; we provide the vision and the polish.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From concept to deployment, we work in the flow: rapid prototyping, continuous delivery, and autonomous monitoring. Our systems adapt to patterns in your users' behavior, our designs evolve based on real data, and our infrastructure scales without friction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-l-4 border-cyan-500 pl-6 text-2xl font-serif italic text-white"
            >
              Welcome to the future of web—where systems think, we create.
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-cyan-400"
            >
              — Evolution Media Group
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-[#000000] to-[#0f0f0f]" id="portfolio">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Where creativity meets precision engineering
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-[#1a1a1a] rounded-2xl overflow-hidden card-hover"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-end`}>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.tagline}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-[#0f0f0f] to-[#000000]" id="services">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Comprehensive digital solutions for ambitious brands
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#1a1a1a] p-8 rounded-2xl card-hover"
                >
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-[#000000] to-[#0f0f0f]" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Tell us about your project and we'll bring it to life
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option>Custom Website</option>
                  <option>Brand Identity</option>
                  <option>eCommerce</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option>€2,000 - €5,000</option>
                  <option>€5,000 - €10,000</option>
                  <option>€10,000 - €20,000</option>
                  <option>€20,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Project Description
              </label>
              <textarea
                id="description"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-all duration-300 glow-hover"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-gray-400 mt-8 text-sm">
            Based in Ireland. Available worldwide.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#0f0f0f] border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold gradient-text mb-2">
                Evolution Media Group
              </h3>
              <p className="text-gray-400 text-sm">
                Autonomous design, human craft.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@evolutionmedia.ie"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2026 Evolution Media Group. All rights reserved.</p>
            <p className="mt-2">
              <a href="mailto:contact@evolutionmedia.ie" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                contact@evolutionmedia.ie
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
