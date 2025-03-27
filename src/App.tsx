import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import propertyImg1 from './assets/assets-task_01jqanmrbxewjazp282enh898b-img_0.webp';
import propertyImg2 from './assets/assets-task_01jqanmrbxewjazp282enh898b-img_1.webp';
import propertyImg3 from './assets/assets-task_01jqakf7e7f7s86kqp3dttgtvq-img_0.webp';

// Mock data for featured cards
const featuredCards = [
  {
    id: 1,
    name: "Coral Reef Manor",
    price: "8.5M Sand Dollars",
    rarity: "Mythic",
    image: propertyImg1,
  },
  {
    id: 2,
    name: "Abyssal Palace",
    price: "12M Sand Dollars",
    rarity: "Legendary",
    image: propertyImg2,
  },
  {
    id: 3,
    name: "Nautilus Gardens",
    price: "15M Sand Dollars",
    rarity: "Ultra Rare",
    image: propertyImg3,
  },
];

function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-900 via-deep-800 to-deep-700 relative overflow-hidden border-8 border-red-500">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-ocean-500/10 rounded-full"
            style={{
              width: Math.random() * 50 + 20,
              height: Math.random() * 50 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-800, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-24 pb-16 text-white relative">
        <motion.span 
          className="block text-2xl font-accent text-coral-400 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Presenting
        </motion.span>
        <motion.h1 
          className="text-7xl font-display font-bold mb-6 bg-gradient-to-r from-ocean-300 via-ocean-400 to-ocean-300 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          REAL ESTATE: Sea Creatures
        </motion.h1>
        <motion.p 
          className="text-xl font-body mb-8 text-ocean-200 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Collect, trade, and own the most prestigious underwater properties in the seven seas!
        </motion.p>
        <motion.button 
          className="bg-gradient-to-r from-coral-400 to-coral-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-coral-500/20 hover:shadow-coral-500/40"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Collecting Now
        </motion.button>
      </header>

      {/* Featured Cards Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <h2 className="text-4xl font-display font-bold text-white mb-12 bg-gradient-to-r from-seaweed-400 to-seaweed-500 text-transparent bg-clip-text">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCards.map((card) => (
            <motion.div
              key={card.id}
              className="relative rounded-xl overflow-hidden shadow-xl bg-deep-800/50 backdrop-blur-sm"
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.03, y: -5 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-900 via-deep-900/60 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-ocean-300 to-ocean-400 text-transparent bg-clip-text">
                      {card.name}
                    </h3>
                    <p className="text-ocean-200 font-body">{card.price}</p>
                    <span className="inline-block mt-3 px-4 py-1.5 bg-ocean-500/20 backdrop-blur-sm rounded-full text-sm font-medium text-ocean-200 border border-ocean-400/20">
                      {card.rarity}
                    </span>
                  </div>
                </div>
              </div>
              {hoveredCard === card.id && (
                <motion.div
                  className="absolute inset-0 bg-deep-800/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="h-full flex items-center justify-center">
                    <button className="bg-gradient-to-r from-ocean-400 to-ocean-500 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-ocean-500/25 transition-all">
                      View Details
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-deep-800/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.h2 
            className="text-5xl font-display font-bold text-white mb-6 bg-gradient-to-r from-coral-400 to-coral-500 text-transparent bg-clip-text"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
          >
            Join the Underwater Real Estate Revolution
          </motion.h2>
          <motion.p 
            className="text-ocean-200 mb-8 max-w-2xl mx-auto text-lg"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Don't miss out on the hottest collectible card game of 2024. 
            Pre-order your starter pack today and receive an exclusive Legendary card!
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-seaweed-400 to-seaweed-500 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-seaweed-500/20 hover:shadow-seaweed-500/40 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Pre-order Now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-900/80 backdrop-blur-sm text-ocean-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-sm">© 2024 REAL ESTATE: Sea Creatures. This is a parody website. No actual real estate or sea creatures were harmed in the making of this website.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 