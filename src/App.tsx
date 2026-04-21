import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, Wifi, Coffee, Car, Tv, Wind, CheckCircle2, Star, ChevronRight, Map, Clock, CalendarDays, Users } from 'lucide-react';

const RoomImageSlider = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Stagger start times slightly for different room sliders
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500 + Math.random() * 500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 bg-brand-black overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          src={images[currentIndex]}
          alt={`₵{title} view ₵{currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ₵{idx === currentIndex ? 'bg-white w-4' : 'bg-white/40 w-1.5 hover:bg-white/70'}`}
            aria-label={`Go to image ₵{idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [welcomeSlideIndex, setWelcomeSlideIndex] = useState(0);

  const welcomeImages = [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1676321688630-9558e7d2be10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeSlideIndex((prev) => (prev + 1) % welcomeImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [welcomeImages.length]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Events', href: '#events' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="min-h-screen bg-brand-black-dark text-slate-300 font-sans selection:bg-brand-blue-light selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-black-dark/95 backdrop-blur-md py-4 shadow-lg shadow-black/50 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <div className="w-4 h-4 border-2 border-white transform -rotate-45"></div>
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-wider ml-2">
                The Stone Tavern
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue-light transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="https://wa.me/233303944689"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2 rounded-sm font-medium transition-all duration-300 shadow-lg shadow-[#25D366]/20 flex items-center gap-2 text-sm hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-black-dark border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 pb-2 px-3">
                  <a
                    href="https://wa.me/233303944689"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-sm font-medium transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Guest House Exterior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-black-dark"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="text-brand-blue-light w-5 h-5 fill-brand-blue-light" />
              <Star className="text-brand-blue-light w-5 h-5 fill-brand-blue-light" />
              <Star className="text-brand-blue-light w-5 h-5 fill-brand-blue-light" />
              <Star className="text-brand-blue-light w-5 h-5 fill-brand-blue-light" />
              <Star className="text-brand-blue-light w-5 h-5 fill-brand-blue-light" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight text-balance">
              Where Elegance Meets Comfort
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
              Experience unparalleled luxury and tranquility at The Stone Tavern. Your perfect escape from the ordinary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#rooms"
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-light text-white px-8 py-4 rounded-sm font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2"
              >
                View Rooms <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-slate-400">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-brand-black-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-blue-light font-medium tracking-widest uppercase mb-3 text-sm">Welcome to The Stone Tavern</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                A Sanctuary of <br/><span className="text-brand-blue-light italic">Refined Luxury</span>
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Nestled in the heart of the city yet feeling worlds away, The Stone Tavern Guest House offers an intimate retreat for discerning travelers. Our historic property has been meticulously restored to blend classic architectural charm with contemporary sophistication.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you're visiting for business or leisure, our dedicated team ensures every aspect of your stay is flawless, providing personalized service that anticipates your every need.
              </p>
              
              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-3xl font-serif text-white mb-1">15+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Luxury Rooms</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-white mb-1">24/7</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Concierge Service</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 bg-brand-black">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={welcomeSlideIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    src={welcomeImages[welcomeSlideIndex]} 
                    alt={`Guest House Interior ${welcomeSlideIndex + 1}`} 
                    className="w-full h-full object-cover absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                  {welcomeImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setWelcomeSlideIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === welcomeSlideIndex ? 'bg-brand-blue-light w-6' : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square border border-brand-blue/30 z-0 hidden md:block"></div>
              <div className="absolute -top-8 -right-8 w-1/2 aspect-square bg-brand-blue/10 z-0 hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 bg-brand-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-blue-light font-medium tracking-widest uppercase mb-3 text-sm">Accommodations</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Signature Rooms</h3>
            <p className="text-slate-400">
              Each of our rooms is uniquely designed to provide the utmost comfort and elegance, featuring premium bedding, bespoke furnishings, and modern amenities.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Room 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-brand-black-dark border border-white/5 rounded-sm overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <RoomImageSlider 
                  images={[
                    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070&auto=format&fit=crop"
                  ]} 
                  title="Deluxe Double Room" 
                />
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-sm font-medium px-3 py-1 rounded-sm">
                  ₵150 / night
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-brand-blue-light transition-colors">Deluxe Double</h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  Perfect for couples, featuring a king-size bed, city views, and a spacious en-suite bathroom with a rainfall shower.
                </p>
                <div className="flex items-center gap-4 text-slate-500 mb-6 pb-6">
                  <div className="flex items-center gap-1.5 text-xs"><Wifi size={14} /> WiFi</div>
                  <div className="flex items-center gap-1.5 text-xs"><Tv size={14} /> Smart TV</div>
                  <div className="flex items-center gap-1.5 text-xs"><Wind size={14} /> AC</div>
                </div>
              </div>
            </motion.div>

            {/* Room 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-black-dark border border-white/5 rounded-sm overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <RoomImageSlider 
                  images={[
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                  ]} 
                  title="Executive Suite" 
                />
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-sm font-medium px-3 py-1 rounded-sm">
                  ₵250 / night
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-brand-blue-light transition-colors">Executive Suite</h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  Our most luxurious offering with a separate living area, panoramic views, premium minibar, and a deep soaking tub.
                </p>
                <div className="flex items-center gap-4 text-slate-500 mb-6 pb-6">
                  <div className="flex items-center gap-1.5 text-xs"><Wifi size={14} /> WiFi</div>
                  <div className="flex items-center gap-1.5 text-xs"><Coffee size={14} /> Minibar</div>
                  <div className="flex items-center gap-1.5 text-xs"><Tv size={14} /> 65" TV</div>
                </div>
              </div>
            </motion.div>

            {/* Room 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-brand-black-dark border border-white/5 rounded-sm overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <RoomImageSlider 
                  images={[
                    "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
                  ]} 
                  title="Classic Single" 
                />
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-sm font-medium px-3 py-1 rounded-sm">
                  ₵100 / night
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-brand-blue-light transition-colors">Classic Single</h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  Cozy and elegantly appointed, ideal for solo travelers or business trips. Features a queen bed and dedicated workspace.
                </p>
                <div className="flex items-center gap-4 text-slate-500 mb-6 pb-6">
                  <div className="flex items-center gap-1.5 text-xs"><Wifi size={14} /> WiFi</div>
                  <div className="flex items-center gap-1.5 text-xs"><Tv size={14} /> TV</div>
                  <div className="flex items-center gap-1.5 text-xs"><Wind size={14} /> AC</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-brand-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-blue-light font-medium tracking-widest uppercase mb-3 text-sm">Facilities</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Premium Amenities</h3>
            <p className="text-slate-400">
              We've thoughtfully curated every detail of your stay to ensure maximum comfort and convenience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {[
              { icon: <Wifi size={32} />, title: 'High-Speed WiFi', desc: 'Complimentary throughout the property' },
              { icon: <Car size={32} />, title: 'Secure Parking', desc: 'Free private parking for guests' },
              { icon: <Wind size={32} />, title: 'Climate Control', desc: 'Individual AC in every room' },
              { icon: <Tv size={32} />, title: 'Smart Entertainment', desc: '4K TVs with streaming services' },
              { icon: <Users size={32} />, title: '24/7 Reception', desc: 'Always here to assist you' },
            ].map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 bg-brand-black-dark border border-white/5 rounded-sm text-center group hover:border-brand-blue/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue-light mb-4 group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{amenity.title}</h4>
                <p className="text-sm text-slate-500">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <section id="events" className="py-24 bg-brand-black-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-blue-light font-medium tracking-widest uppercase mb-3 text-sm">Unforgettable Moments</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Special Events</h3>
              <p className="text-slate-400">
                The Stone Tavern Guest House offers a picturesque setting for your most memorable occasions. From intimate ceremonies to grand celebrations, our versatile spaces and dedicated team ensure your event is nothing short of perfection.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: 'Weddings',
                desc: 'Exchange vows in our stunning outdoor gardens or elegant indoor spaces, creating the perfect backdrop for your special day.',
                img: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Wedding Receptions',
                desc: 'Celebrate your union with a bespoke dining experience, featuring exquisite catering and a beautifully decorated venue.',
                img: 'https://images.unsplash.com/photo-1723832348105-2e69f948135a?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Private Parties',
                desc: 'Host birthdays, anniversaries, or corporate gatherings in our exclusive event spaces designed to impress your guests.',
                img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-2xl font-serif text-white mb-3">{event.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section id="location" className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-blue-light font-medium tracking-widest uppercase mb-3 text-sm">Location</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Find Your Way to Us</h3>
              <p className="text-slate-400 mb-8">
                The Stone Tavern is conveniently located in the historic district, just minutes away from major attractions, dining, and shopping venues.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-blue/10 flex items-center justify-center text-brand-blue-light shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">Address</h4>
                    <p className="text-slate-400">Off Nsawam - Aburi Rd, Nsawam<br/>RM79+4R Nsawam</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[400px] lg:h-auto min-h-[400px] rounded-sm overflow-hidden border border-white/10 relative"
            >
              {/* Google Map */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.303345211559!2d-0.3329878264442942!3d5.812765894170202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf0b68baee2ef9%3A0x12bcc982f2788b74!2sThe%20Stone%20Tavern!5e0!3m2!1sen!2sgh!4v1775200909254!5m2!1sen!2sgh" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Stone Tavern Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue-light font-medium tracking-widest uppercase mb-3 text-sm">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Contact Us</h3>
            <p className="text-slate-400 mb-12">
              Have a question about our rooms, amenities, or special requests? We're here to help make your stay perfect.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-sm bg-brand-blue/10 flex items-center justify-center text-brand-blue-light shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Phone</h4>
                  <p className="text-slate-400">0303944689</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-sm bg-brand-blue/10 flex items-center justify-center text-brand-blue-light shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Email</h4>
                  <p className="text-slate-400">thestonetaverngh@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black-dark pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-7 lg:col-span-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-blue flex items-center justify-center rounded-sm transform rotate-45">
                  <div className="w-3 h-3 border-2 border-white transform -rotate-45"></div>
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-wider ml-2">
                  The Stone Tavern
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                A luxury guest house offering an unforgettable experience of comfort, elegance, and personalized service.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholders */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>

            {/* Contact Info & Quick Links */}
            <div className="col-span-1 md:col-span-5 lg:col-span-4">
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin size={18} className="text-brand-blue-light shrink-0 mt-0.5" />
                  <span>Off Nsawam - Aburi Rd, Nsawam<br/>RM79+4R Nsawam</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone size={18} className="text-brand-blue-light shrink-0" />
                  <span>0303944689</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail size={18} className="text-brand-blue-light shrink-0" />
                  <span>thestonetaverngh@gmail.com</span>
                </li>
              </ul>

              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-brand-blue-light transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} The Stone Tavern Guest House. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/233303944689"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-[99999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>
    </a>
    </>
  );
}
