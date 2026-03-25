import { motion } from 'motion/react';
import { Menu, X, ArrowRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "142814be-61cf-41cb-8d15-7b139be70074");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    setResult(data.success ? "Message sent! ✅" : "Something went wrong ❌");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    {
      title: 'Social Media Management',
      price: 'Starting at $75/month',
      description: 'Grow your audience and engagement on Instagram, TikTok, and Facebook with consistent, high-quality posts.',
      features: ['Content scheduling', 'Community engagement', 'Analytics reporting']
    },
    {
      title: 'Website Building',
      price: 'Starting at $150',
      description: 'Professional, mobile-friendly websites designed to convert visitors into paying customers.',
      features: ['Custom design', 'Mobile optimization', 'SEO setup']
    },
    {
      title: 'Combined Packages',
      price: 'Starting at $200/month',
      description: 'The ultimate growth engine. Get a new website plus ongoing social media management.',
      features: ['Website + Social Media', 'Coordinated campaigns', 'Priority support']
    },
    {
      title: 'Content Creation',
      price: 'Custom Pricing',
      description: 'Eye-catching graphics, engaging captions, and professional Reels editing to make your brand stand out.',
      features: ['Custom graphics', 'Reels/TikTok editing', 'Copywriting']
    }
  ];

  const portfolioItems = [
    {
      title: 'Local Cafe Rebrand',
      category: 'Website & Social Media',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Fitness Studio Launch',
      category: 'Social Media Management',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Boutique Store E-commerce',
      category: 'Website Building',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Real Estate Agency',
      category: 'Content Creation',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="text-2xl font-bold tracking-tighter">
            Quelm Co<span className="text-gold">.</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium nav-link"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium btn-primary"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-2 text-lg font-medium"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-6 py-3 rounded-full text-center font-medium mt-4"
            >
              Let's Talk
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600">
            Based in Mississauga, ON
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            Helping Mississauga Businesses <span className="text-gold">Grow Online</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional digital services tailored for local businesses. From stunning websites to engaging social media, we build your online presence so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-2 btn-primary"
            >
              Get a Free Consultation <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-medium border border-gray-200 hover:border-black transition-colors"
            >
              View Services
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Simple, transparent pricing for high-quality digital solutions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 service-card flex flex-col h-full"
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gold font-semibold mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Sample Projects</h2>
              <p className="text-gray-600 max-w-2xl text-lg">A glimpse into what we can build for your brand.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="portfolio-item rounded-2xl cursor-pointer group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover portfolio-image"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 portfolio-overlay flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-3 rounded-full font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-medium text-gold mb-1">{item.category}</p>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to grow?</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                Whether you need a new website, social media management, or both, we're here to help your Mississauga business thrive online.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:nicandro.carranza@gmail.com" className="text-lg font-medium hover:text-gold transition-colors">nicandro.carranza@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:905-608-3069" className="text-lg font-medium hover:text-gold transition-colors">905-608-3069</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg font-medium">Mississauga, Ontario, Canada</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10"
            >
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text"
                    name="name"
                    id="name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 form-input focus:bg-white/10"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    id="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 form-input focus:bg-white/10"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    name="message"
                    id="message" 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 form-input focus:bg-white/10 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gold text-black font-bold text-lg py-4 rounded-xl hover:bg-gold-light transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transform hover:scale-[1.02] duration-300"
                >
                  Send Message
                </button>
                <p className="text-center text-sm text-gray-300">{result}</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10 py-8 px-6 md:px-12 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Quelm Co. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
