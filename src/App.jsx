import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarResponsive from './components/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import LoginForm from './components/forms/LoginForm.jsx'
import RegisterForm from './components/forms/RegisterForm.jsx';
import { AlertProvider } from './context/AlertContext.jsx';

export default function App() {
  return (
    <main>
      <AlertProvider>
        <BrowserRouter>
          <NavbarResponsive />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/blog" element={<>blog</>} />
            <Route path="/admin" element={<>admin</>} />
            <Route path="/admin/login" Component={LoginForm} />
            <Route path="/admin/registro" Component={RegisterForm} />
            <Route path="/admin/panel" element={<>panel</>} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AlertProvider>
    </main>
  );
}