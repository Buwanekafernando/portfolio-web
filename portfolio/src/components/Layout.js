import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <div className="layout">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
