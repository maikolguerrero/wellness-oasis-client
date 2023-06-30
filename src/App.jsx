import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarResponsive from './components/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import LoginForm from './components/forms/LoginForm.jsx'
import RegisterForm from './components/forms/RegisterForm.jsx';
import Panel from './components/admin/Panel.jsx';
import { AlertProvider } from './context/AlertContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './auth/ProtectedRoute.jsx';

export default function App() {
  return (
    <AuthProvider>
      <main>
        <AlertProvider>
          <BrowserRouter>
            <NavbarResponsive />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<div>blog</div>} />

              <Route path="/admin">
                <Route path="" element={<ProtectedRoute route={Panel} />} />
                <Route path="login" element={<ProtectedRoute route={LoginForm} />} />
                <Route path="registro" element={<ProtectedRoute route={RegisterForm} />} />
                <Route path="panel" element={<ProtectedRoute route={Panel} />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AlertProvider>
      </main>
    </AuthProvider>
  );
}