import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail, Wifi, Car, Tv, Wind, CheckCircle2, Star, ChevronRight, Map, Clock, CalendarDays, Users } from 'lucide-react';
import { siteImages } from './assets/site-images';

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
          alt={`${title} view ${currentIndex + 1}`}
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
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/40 w-1.5 hover:bg-white/70'}`}
            aria-label={`Go to image ${idx + 1}`}
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

  const welcomeImages = siteImages.welcomeCarousel;

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
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-blue-light selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-md shadow-gray-200 border-b border-gray-100' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <div className="w-4 h-4 border-2 border-white transform -rotate-45"></div>
              </div>
              <span className="font-serif text-2xl font-bold text-gray-900 tracking-wider ml-2">
                Vihills Hotel
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue-light transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="https://wa.me/233548382022"
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
                className="text-gray-700 hover:text-gray-900 p-2"
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
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 pb-2 px-3">
                  <a
                    href="https://wa.me/233548382022"
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
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={siteImages.heroBanner}
            alt="Vihills Hotel exterior"
            className="w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent"></div>
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
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
              Experience unparalleled luxury and tranquility at Vihills Hotel. Your perfect escape from the ordinary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#rooms"
                className="w-full sm:w-auto bg-white border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 rounded-sm font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-sm shadow-brand-blue/10 flex items-center justify-center gap-2"
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
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand-blue-light font-medium tracking-widest uppercase mb-3 text-sm">Welcome to Vihills Hotel</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                A Sanctuary of <br/><span className="text-brand-blue-light italic">Refined Luxury</span>
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nestled in the heart of the city yet feeling worlds away, Vihills Hotel offers an intimate retreat for discerning travelers. Our historic property has been meticulously restored to blend classic architectural charm with contemporary sophistication.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Whether you're visiting for business or leisure, our dedicated team ensures every aspect of your stay is flawless, providing personalized service that anticipates your every need.
              </p>
              
              <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
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
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 bg-white">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={welcomeSlideIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    src={welcomeImages[welcomeSlideIndex]} 
                    alt={`Vihills Hotel interior ${welcomeSlideIndex + 1}`} 
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 auto-rows-fr">
            {/* Room 1 — Standard Room */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden group h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <RoomImageSlider 
                  images={[...siteImages.rooms.standardRoom]} 
                  title="Standard Room" 
                />
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-sm font-medium px-3 py-1 rounded-sm">
                  ₵300 / night
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-brand-blue-light transition-colors">Standard Room</h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  A well-appointed standard with a comfortable bed, crisp linens, and everything you need for a restful stay.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 mt-auto mb-6 pb-6">
                  <div className="flex items-center gap-1.5 text-xs"><Wifi size={14} /> WiFi</div>
                  <div className="flex items-center gap-1.5 text-xs"><Tv size={14} /> Smart TV</div>
                  <div className="flex items-center gap-1.5 text-xs"><Wind size={14} /> AC</div>
                </div>
              </div>
            </motion.div>

            {/* Room 2 — Standard Double */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden group h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <RoomImageSlider 
                  images={[...siteImages.rooms.standardDouble]} 
                  title="Standard Double" 
                />
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-sm font-medium px-3 py-1 rounded-sm">
                  ₵350 / night
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-brand-blue-light transition-colors">Standard Double</h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  A welcoming double room with modern comforts—ideal for couples or two guests traveling together.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 mt-auto mb-6 pb-6">
                  <div className="flex items-center gap-1.5 text-xs"><Wifi size={14} /> WiFi</div>
                  <div className="flex items-center gap-1.5 text-xs"><Tv size={14} /> Smart TV</div>
                  <div className="flex items-center gap-1.5 text-xs"><Wind size={14} /> AC</div>
                </div>
              </div>
            </motion.div>

            {/* Room 3 — Superior Double */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden group h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <RoomImageSlider 
                  images={[...siteImages.rooms.superiorDouble]} 
                  title="Superior Double" 
                />
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-sm font-medium px-3 py-1 rounded-sm">
                  ₵500 / night
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-brand-blue-light transition-colors">Superior Double</h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  Refined double accommodation with elevated finishes, extra space, and a calm atmosphere for discerning guests.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 mt-auto mb-6 pb-6">
                  <div className="flex items-center gap-1.5 text-xs"><Wifi size={14} /> WiFi</div>
                  <div className="flex items-center gap-1.5 text-xs"><Tv size={14} /> TV</div>
                  <div className="flex items-center gap-1.5 text-xs"><Wind size={14} /> AC</div>
                </div>
              </div>
            </motion.div>

            {/* Room 4 — Deluxe Room */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden group h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <RoomImageSlider 
                  images={[...siteImages.rooms.deluxeRoom]} 
                  title="Deluxe Room" 
                />
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-sm font-medium px-3 py-1 rounded-sm">
                  ₵700 / night
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-brand-blue-light transition-colors">Deluxe Room</h4>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  Our deluxe category with premium bedding, generous layout, and enhanced details for an elevated stay.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 mt-auto mb-6 pb-6">
                  <div className="flex items-center gap-1.5 text-xs"><Wifi size={14} /> WiFi</div>
                  <div className="flex items-center gap-1.5 text-xs"><Tv size={14} /> Smart TV</div>
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
                className="p-6 bg-white border border-gray-100 rounded-sm text-center group hover:border-brand-blue/50 transition-colors"
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
      <section id="events" className="py-24 bg-white">
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
                Vihills Hotel offers a picturesque setting for your most memorable occasions. From intimate ceremonies to grand celebrations, our versatile spaces and dedicated team ensure your event is nothing short of perfection.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: 'Weddings',
                desc: 'Exchange vows in our stunning outdoor gardens or elegant indoor spaces, creating the perfect backdrop for your special day.',
                img: siteImages.events.weddings
              },
              {
                title: 'Wedding Receptions',
                desc: 'Celebrate your union with a bespoke dining experience, featuring exquisite catering and a beautifully decorated venue.',
                img: siteImages.events.receptions
              },
              {
                title: 'Private Parties',
                desc: 'Host birthdays, anniversaries, or corporate gatherings in our exclusive event spaces designed to impress your guests.',
                img: siteImages.events.parties
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
                Vihills Hotel is conveniently located in the historic district, just minutes away from major attractions, dining, and shopping venues.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-sm bg-brand-blue/10 flex items-center justify-center text-brand-blue-light shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg mb-1">Address</h4>
                    <p className="text-slate-400">New Bortianor, after west hills mall , Obolo block factory-Solo Avenue, Accra</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.1973096682173!2d-0.35831962650224897!3d5.537729633836218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdea27f91c27%3A0xfd797a55b0ee0544!2sVihills%20hotel!5e0!3m2!1sen!2sgh!4v1779283973798!5m2!1sen!2sgh" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vihills Hotel location"
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
                  <p className="text-slate-400">0548382022</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-sm bg-brand-blue/10 flex items-center justify-center text-brand-blue-light shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Email</h4>
                  <p className="text-slate-400">jbuafi@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-7 lg:col-span-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-blue flex items-center justify-center rounded-sm transform rotate-45">
                  <div className="w-3 h-3 border-2 border-white transform -rotate-45"></div>
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-wider ml-2">
                  Vihills Hotel
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                A luxury hotel offering an unforgettable experience of comfort, elegance, and personalized service.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholders */}
                <a href="https://www.facebook.com/profile.php?id=100095218211075" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://www.tiktok.com/@joy.vihills.hotel?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-colors">
                  <span className="sr-only">TikTok</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.688 3.037c.252.1.5.217.742.35.45.25.845.594 1.154 1.012.31.418.513.9.588 1.416.075.516.02 1.04-.155 1.52-.175.48-.455.905-.817 1.243-.362.338-.79.587-1.253.73-.463.144-.951.176-1.432.092v4.06c0 1.511-.914 2.828-2.248 3.38a3.554 3.554 0 01-1.13.207c-.307.023-.617 0-.92-.07a3.53 3.53 0 01-2.498-2.177 3.585 3.585 0 01.125-2.784c.219-.537.57-1.01 1.028-1.38.458-.37 1.002-.63 1.58-.763.577-.133 1.175-.123 1.74.028v1.876a1.92 1.92 0 00-1.406-.28c-.397.089-.76.305-1.05.614-.287.309-.48.69-.56 1.104a1.69 1.69 0 00.074 1.01 1.716 1.716 0 001.035 1.042c.655.241 1.376.108 1.92-.36.543-.469.848-1.18.848-1.931V7.68c.54.16 1.088.095 1.59-.182.502-.278.923-.74 1.216-1.325.294-.584.43-1.247.39-1.912V3.8c-.117.04-.236.075-.356.106-.76.214-1.57.09-2.262-.34z" /></svg>
                </a>
              </div>
            </div>

            {/* Contact Info & Quick Links */}
            <div className="col-span-1 md:col-span-5 lg:col-span-4">
              <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin size={18} className="text-brand-blue-light shrink-0 mt-0.5" />
                  <span>New Bortianor, after west hills mall , Obolo block factory-Solo Avenue, Accra</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Phone size={18} className="text-brand-blue-light shrink-0" />
                  <span>0548382022</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail size={18} className="text-brand-blue-light shrink-0" />
                  <span>jbuafi@gmail.com</span>
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
              &copy; {new Date().getFullYear()} Vihills Hotel. All rights reserved.
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
      href="https://wa.me/233548382022"
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
