import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Casino from '@/pages/Casino';
import Sports from '@/pages/Sports';
import AppPage from '@/pages/AppPage';
import Login from '@/pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0d0d0d] grain-overlay">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cassino" element={<Casino />} />
            <Route path="/esportivas" element={<Sports />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
