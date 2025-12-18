import { useEffect } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import FloatingContacts from './FloatingContacts';

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="app-shell">
      <Nav />
      <main>{children}</main>
      <FloatingContacts />
      <Footer />
    </div>
  );
};

export default Layout;
