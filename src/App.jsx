import React from 'react'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home, About, Faculty, Student, NotFound, Notification } from './pages/index.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/notificaiton' element={<Notification />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/Student' element={<Student />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
