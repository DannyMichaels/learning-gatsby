import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import 'normalize.css'; // npm package
import '../../assets/css/main.css';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
