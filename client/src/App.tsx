import { Routes, Route } from 'react-router-dom';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { HomePage } from './pages/HomePage';
import { InvestPage } from './pages/InvestPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}