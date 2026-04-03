import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import AppPage from '@/pages/AppPage';
import Login from '@/pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d0d0d] grain-overlay">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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
