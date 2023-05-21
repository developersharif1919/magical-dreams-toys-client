import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [borderColor, setBorderColor] = useState('blue');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', email);
    setEmail('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 mt-28 mb-28">
      <div className="container mx-auto text-center relative">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Subscribe to our Newsletter
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay up to date with the latest news, updates, and promotions.
        </motion.p>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <motion.input
            type="email"
            className="py-3 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: 'easeInOut', yoyo: Infinity },
            }}
          />
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
              transition: { duration: 1.5, ease: 'easeInOut', repeat: Infinity },
            }}
          >
            Click Me!
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
