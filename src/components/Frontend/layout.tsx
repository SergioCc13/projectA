import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Katering from './katering';
import { motion } from 'framer-motion';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#fae9db' }}> {/* Aplica el color de fondo al contenedor principal */}
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.main>
      <Katering />
      <Footer />
    </div>
  );
};

export default Layout;
