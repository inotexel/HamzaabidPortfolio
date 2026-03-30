import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <CustomCursor />
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--bg-card)',
                color: 'var(--text)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
              },
            }}
          />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <BackToTop />
          <BottomNav />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
