import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Grid, User, Menu, X, ArrowRight } from 'lucide-react';
import { div } from 'framer-motion/m';
import poster1 from './assets/Images/poster1.jpg';
import poster2 from './assets/Images/poster2.jpg';
import poster3 from './assets/Images/poster3.jpg';
import poster4 from './assets/Images/poster4.jpg';
import poster5 from './assets/Images/poster5.jpg';
import poster6 from './assets/Images/poster6.png';
import profile from "./assets/Images/66.jpg";

const VirtualGalleryLanding = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const posters = [poster1, poster2, poster3, poster4, poster5, poster6];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Grid },
    { id: 'gallary', label: 'Gallery', icon: Grid },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#bff1ff] text-[#013C58] min-h-screen flex flex-col">
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#bff1ff] lg:hidden"
          >
            <div className="flex flex-col h-full justify-center items-center space-y-12">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * navItems.indexOf(item) }}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`text-3xl font-bold ${
                    activeSection === item.id 
                      ? 'text-[#013C58]' 
                      : 'text-[#00537A] hover:text-[#013C58]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button 
                onClick={toggleMobileMenu}
                className="absolute top-6 right-6 text-[#013C58]"
              >
                <X size={32} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="p-4 md:p-6 flex justify-between items-center"
      >
        <div className="flex items-center space-x-4">
          <div className="text-xl md:text-2xl font-bold text-[#013C58]">Virtual Gallery</div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center space-x-2 font-semibold ${
                activeSection === item.id 
                  ? 'text-[#013C58] font-bold' 
                  : 'text-[#00537A] hover:text-[#013C58]'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden text-[#013C58]"
        >
          <Menu size={24} />
        </button>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="flex-grow container mx-auto px-4 md:px-6 py-6 md:py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {activeSection === 'home' && (
          <div className='flex flex-col gap-12 lg:gap-16'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#013C58]">
                  Beyond The Print: The New Era of Poster Art
                </h1>
                <p className="text-base md:text-xl text-[#013C58] mb-6 md:mb-8">
                  Discover creative visualizations from our exciting poster presentation event. 
                  Explore innovative designs across five unique topics.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-auto lg:mx-0 bg-[#013C58] text-[#bff1ff] px-6 py-3 rounded-full 
                            flex items-center space-x-2 text-base md:text-lg font-semibold"
                  onClick={() => setActiveSection('gallary')}
                >
                  <span>Explore Gallery</span>
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>

              <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="hidden md:block bg-[#bff1ff] p-4 md:p-6 rounded-xl border border-[#bff1ff]"
    >
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {posters.map((posterSrc, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="relative overflow-hidden rounded-lg opacity-85 hover:opacity-100 h-20 md:h-32"
          >
            <img 
              src={posterSrc} 
              alt={`Poster ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
            </div>
            <div>
              <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-[#013C58]">
                Our Five Featured Topics
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {[
                  { name: 'Nature & Sustainability', description: 'Discover the beauty and importance of preserving our environment.' },
                  { name: 'Connection', description: 'Exploring the threads that tie people, ideas, and cultures together.' },
                  { name: 'Balance', description: 'Finding harmony in a fast-paced and ever-changing world.' },
                  { name: 'Awakening', description: 'Delve into moments of realization and personal growth.' },
                  { name: 'Dream & Imagination', description: 'Unleash creativity through the power of the mind.' }
                ].map((topic, index) => (
                  <motion.div
                    key={topic.name}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#bff1ff] p-4 md:p-6 rounded-xl border-2 border-[#00537A] 
                              hover:border-[#013C58] hover:border-4 transition-all"
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-[#013C58]">
                      {topic.name}
                    </h3>
                    <p className="text-xs md:text-base text-[#013C58]">
                      {topic.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            </div>
            <div>
              <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12"
            >
              <motion.div 
                className="w-48 md:w-64 h-48 md:h-64 rounded-full overflow-hidden border-4 border-[#013C58]"
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <img 
                  src={profile}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="max-w-2xl text-center lg:text-left px-4 lg:px-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#013C58]">
                  About Exhibition
                </h2>
                <p className="text-base md:text-xl text-[#013C58] mb-4 md:mb-6">
                Welcome to the Virtual Poster Design Exhibition! After seeing all the amazing designs from my 5 Poster Design Briefs series, I'm excited to bring them together in this virtual space to showcase the incredible creativity from all of you. Explore diverse interpretations, bold designs, and fresh concepts as we celebrate the art of poster design in the digital age. Thank you to everyone who participated — let’s keep the creativity flowing!
                </p>
                <motion.div 
                  className="flex justify-center lg:justify-start space-x-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#013C58] text-[#bff1ff] px-4 md:px-6 py-2 md:py-3 rounded-full 
                              flex items-center space-x-2 text-base md:text-lg font-semibold"
                    onClick={() => window.open('https://www.instagram.com/saurabh_zore.arts/?igsh=NTh1YnppOGxnMGNr', '_blank')}
                  >
                    <span>Insta Handle</span>
                  </motion.button>

                </motion.div>
              </div>
            </motion.div>
            </div>
          </div>
        )}

        {/* {activeSection === 'topics' && (
          
        )} */}
        {activeSection === 'gallary' && (
          <div className="bg-[#bff1ff] flex items-center justify-center">
          {/* Default iframe for larger screens */}
          <div className="hidden md:block">
            <iframe width="1280" height="720" src="https://www.artsteps.com/embed/6759d4c63584a28c3d785c19/1280/720" frameborder="0" allowfullscreen></iframe>
          </div>
        
          {/* Alternative iframe for mobile devices */}
          <div className="block md:hidden">
          <iframe width="350" height="750" src="https://www.artsteps.com/embed/6759d4c63584a28c3d785c19/560/315" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        
        )}

      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="p-4 text-center text-[#013C58] text-xs md:text-sm"
      >
        © 2024 Virtual Gallery Exhibition. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default VirtualGalleryLanding;