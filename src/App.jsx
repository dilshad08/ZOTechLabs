import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Icosahedron, Environment, Float } from '@react-three/drei';
import { Monitor, Smartphone, Cloud, Database, ArrowRight, Zap, ArrowUpRight, Code, Shield, Menu, X, Rocket, Cpu, Layers, Sun, Moon, Server, Box, Hexagon, Component, Terminal, Palette, Activity, Globe, MapPin, Mail, Phone, BrainCircuit, ShoppingCart, GitMerge, BarChart, PenTool, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

// Professional 3D Geometry
const TechGeometry = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#3b82f6" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#60a5fa" />
      <Environment preset="city" />
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Icosahedron args={[1.2, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#0f172a"
            wireframe={true}
            wireframeLinewidth={2}
          />
        </Icosahedron>
        <Icosahedron args={[1, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#3b82f6"
            roughness={0.2}
            metalness={0.8}
            transparent={true}
            opacity={0.8}
          />
        </Icosahedron>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'glass-header' : ''}`}>
        <div className="container nav-content">
          <a href="#home" className="logo" onClick={() => window.scrollTo(0, 0)}>
            <div style={{ width: '32px', height: '32px', background: 'var(--accent-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="white" />
            </div>
            ZOTech Labs
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#tech">Tech</a>
            <a href="#services">Services</a>
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="mobile-menu-btn-container">
            <button className="theme-toggle mobile-menu-btn" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <button
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
        <a href="#tech" onClick={() => setMobileMenuOpen(false)}>Technologies</a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="hero-badge">Enterprise End-to-End Solutions</motion.div>
            <motion.h1 variants={fadeUp} className="hero-title">
              Engineering the <br />
              <span className="gradient-text-accent">Digital Future</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-desc">
              ZOTech Labs is a premium software agency providing complete, end-to-end solutions. From initial strategy and design to highly scalable web platforms, mobile apps, and secure cloud deployments.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-buttons">
              <a href="mailto:contact@zotechlabs.com" className="btn btn-primary">
                Discuss Your Project <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-3d-wrapper"
          >
            <TechGeometry />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-bar">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>25+</h3>
            <p>Enterprise Clients</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3>99.9%</h3>
            <p>Uptime Guaranteed</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Dedicated Support</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About ZOTech Labs</motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Founded by a team of elite software engineers and designers, ZOTech Labs was built on a single premise: delivering enterprise-grade digital products without the enterprise-level friction.
              </motion.p>
              <motion.p variants={fadeUp} style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                We believe in writing clean code, building intuitive interfaces, and architecting scalable cloud solutions that solve real business problems. Whether you are a fast-growing startup or a Fortune 500 company, we treat your product as our own.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href="mailto:contact@zotechlabs.com" className="btn btn-secondary">Get in touch with our team</a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-panel"
              style={{ padding: '3rem', position: 'relative', overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'flex-end' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="ZOTech Team" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>Our Mission</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>To engineer software solutions that push the boundaries of performance and design.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="section-header"
          >
            <h2 className="gradient-text">Complete End-to-End Solutions</h2>
            <p>We don't just write code. We handle every aspect of the software lifecycle, transforming your raw idea into a scalable, market-ready enterprise product.</p>
          </motion.div>

          <motion.div
            className="process-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="process-card glass-panel">
              <div className="process-number">01</div>
              <Cpu size={32} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
              <h3>Discovery & Strategy</h3>
              <p>We analyze your business goals, target audience, and technical requirements to architect the perfect solution blueprint.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="process-card glass-panel">
              <div className="process-number">02</div>
              <Layers size={32} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
              <h3>UI/UX Design</h3>
              <p>Our award-winning design team creates intuitive, beautiful, and user-centric interfaces that engage and convert.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="process-card glass-panel">
              <div className="process-number">03</div>
              <Code size={32} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
              <h3>Agile Development</h3>
              <p>We build robust, scalable applications using cutting-edge tech stacks, ensuring high performance and security.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="process-card glass-panel">
              <div className="process-number">04</div>
              <Rocket size={32} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
              <h3>Deployment & Scaling</h3>
              <p>Seamless CI/CD deployments to secure cloud infrastructure, coupled with 24/7 maintenance and scalable architecture.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="gradient-text">Powered by Cutting-Edge Tech</h2>
            <p>We leverage industry-leading frameworks and robust cloud providers to ensure your application performs at scale.</p>
          </motion.div>

          <motion.div
            className="tech-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}
          >
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Component size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>React & Next.js</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Server size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Node & Express</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Terminal size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Python & Django</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Code size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>TypeScript</h3>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Database size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>PostgreSQL</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Activity size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Redis Cache</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Cloud size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>AWS & GCP</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Globe size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Kubernetes</h3>
            </motion.div>

            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Smartphone size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>React Native</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Box size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Docker</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Hexagon size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>GraphQL</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Palette size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Figma & UI/UX</h3>
            </motion.div>

            {/* New 6 Items */}
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Database size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>MongoDB</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Component size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Vue & Nuxt.js</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Palette size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Tailwind CSS</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Cloud size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Firebase</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Activity size={40} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Stripe API</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Hexagon size={40} color="var(--accent-secondary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.125rem' }}>Web3 & Solidity</h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>Technical Solutions</h2>
            <p>Our engineers are masters of modern frameworks, ready to tackle any complex enterprise challenge you face.</p>
          </motion.div>

          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><Monitor size={28} /></div>
              <h3>Web Applications</h3>
              <p>High-performance, highly interactive web applications built with React, Next.js, and modern ecosystems for ultimate speed.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><Smartphone size={28} /></div>
              <h3>Mobile Development</h3>
              <p>Native iOS and Android applications, as well as efficient cross-platform solutions using React Native and Flutter.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><Cloud size={28} /></div>
              <h3>Cloud & Deployment</h3>
              <p>Scalable infrastructure architecture on AWS, Azure, and Google Cloud with fully automated CI/CD pipelines.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><Code size={28} /></div>
              <h3>Custom SaaS Products</h3>
              <p>End-to-end development of scalable Software-as-a-Service platforms tailored specifically to your industry needs.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><Database size={28} /></div>
              <h3>Backend & API Design</h3>
              <p>Robust microservices and RESTful/GraphQL APIs designed for extremely high availability and low latency.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><Shield size={28} /></div>
              <h3>Security & Auditing</h3>
              <p>Comprehensive code audits, penetration testing, and enterprise security compliance to protect your critical data.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><BrainCircuit size={28} /></div>
              <h3>AI & Machine Learning</h3>
              <p>Integrate predictive analytics, LLMs, and custom AI models to automate workflows and unlock data insights.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><ShoppingCart size={28} /></div>
              <h3>E-Commerce Platforms</h3>
              <p>Highly scalable, headless e-commerce architectures utilizing Next.js, Shopify Plus, and Stripe integrations.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><GitMerge size={28} /></div>
              <h3>DevOps & Automation</h3>
              <p>Streamlined CI/CD pipelines, automated testing, and infrastructure-as-code for rapid, reliable releases.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><BarChart size={28} /></div>
              <h3>Data Engineering</h3>
              <p>Complex ETL pipelines, data warehouses, and real-time streaming architectures handling massive datasets.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><PenTool size={28} /></div>
              <h3>UI/UX Strategy</h3>
              <p>Comprehensive wireframing, interactive prototyping, and user testing to guarantee product-market fit.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="service-card glass-panel">
              <div className="service-icon"><RefreshCw size={28} /></div>
              <h3>Legacy Modernization</h3>
              <p>Seamlessly refactoring and migrating outdated monolithic systems to modern, maintainable microservices.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>





      {/* Footer (With Contact / Office Details added) */}
      <footer className="footer">
        <div className="container">
          <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.25rem' }}>Our Contacts</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <a href="#" className="contact-pill glass-panel">
              <div className="contact-icon-wrapper"><MapPin size={20} color="white" /></div>
              <span>Purnea, Bihar - 854301, India</span>
            </a>
            
            <a href="mailto:contact@zotechlabs.com" className="contact-pill glass-panel">
              <div className="contact-icon-wrapper"><Mail size={20} color="white" /></div>
              <span>contact@zotechlabs.com</span>
            </a>
            
            <a href="tel:+9179922441166" className="contact-pill glass-panel">
              <div className="contact-icon-wrapper"><Phone size={20} color="white" /></div>
              <span>+91 79922441166</span>
            </a>
            
            <a href="tel:+918210380847" className="contact-pill glass-panel">
              <div className="contact-icon-wrapper"><Phone size={20} color="white" /></div>
              <span>+91 8210380847</span>
            </a>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} ZOTech Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
