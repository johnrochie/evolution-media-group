"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, Globe, Mail, ExternalLink, Sparkles, Zap, Check } from "lucide-react";
import WebsiteOrderForm from "./components/WebsiteOrderForm";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

const projectData = [
  {
    title: "Dublin Yoga Studio",
    tagline: "Professional Yoga Website",
    url: "https://dublin-yoga-studio.vercel.app",
    description: "Built in 24 minutes, delivered in 2 hours. Professional yoga studio website with booking system and teacher profiles.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-emerald-500 to-teal-500",
    price: "€500",
    time: "24 minutes"
  },
  {
    title: "Golden Dragon Chinese Restaurant",
    tagline: "Authentic Chinese Restaurant",
    url: "https://golden-dragon-chinese.vercel.app",
    description: "Built in 14 minutes. Complete restaurant website with menu, gallery, and online ordering.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    gradient: "from-red-500 to-amber-500",
    price: "€500",
    time: "14 minutes"
  }
];

const features = [
  {
    icon: Zap,
    title: "AI-Powered Development",
    description: "Our AI agents build complete websites in 15-30 minutes using proven templates and best practices."
  },
  {
    icon: Check,
    title: "Human Quality Assurance",
    description: "Every website undergoes rigorous testing by our human QA team before delivery."
  },
  {
    icon: Globe,
    title: "24-Hour Delivery",
    description: "Guaranteed delivery within 24 hours. Most websites are ready in 2-4 hours."
  },
  {
    icon: Sparkles,
    title: "Professional Results",
    description: "Production-ready Next.js websites with TypeScript, Tailwind CSS, and mobile responsiveness."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl font-bold mb-6"
          >
            Evolution Media
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-light mb-12 gradient-text"
          >
            €500 Websites in 24 Hours
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Professional websites built by AI, tested by humans, delivered fast. 
            Our automated pipeline has already delivered €1,000 worth of websites today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#order" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:opacity-90 transition inline-flex items-center justify-center">
              Order Your Website - €500
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#examples" className="px-8 py-4 bg-gray-900 border border-gray-800 text-gray-300 font-bold rounded-lg hover:bg-gray-800 transition inline-flex items-center justify-center">
              See Examples
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="examples" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Recent Deliveries
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-gray-400">{project.tagline}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{project.price}</div>
                      <div className="text-sm text-gray-500">{project.time} build</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                  >
                    View Live Website
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Get Your Website
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <WebsiteOrderForm />
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-amber-400" />
                  What You Get
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Professional Next.js website</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Mobile-responsive design</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>5+ custom sections</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>TypeScript for type safety</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Tailwind CSS styling</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>Vercel hosting (1 year free)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    <span>24-hour delivery guarantee</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">AI-Powered Speed</div>
                      <div className="text-sm text-purple-200">15-30 minute development</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Human Quality</div>
                      <div className="text-sm text-purple-200">Rigorous testing by experts</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-lg">€</span>
                    </div>
                    <div>
                      <div className="font-medium">Fixed Price</div>
                      <div className="text-sm text-purple-200">€500 - no hidden fees</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">€1,000+</div>
              <div className="text-gray-400">Revenue Today</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">19min</div>
              <div className="text-gray-400">Avg. Build Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24h</div>
              <div className="text-gray-400">Delivery Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Professional Website?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join businesses already using our AI-powered website generation service.
          </p>
          <a
            href="#order"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:opacity-90 transition text-lg"
          >
            Order Now - €500
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
