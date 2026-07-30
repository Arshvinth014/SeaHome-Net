import { Routes, Route } from 'react-router-dom';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { HomePage } from './pages/HomePage';
import { InvestPage } from './pages/InvestPage';
import { CountryPage } from './pages/CountryPage';
import { BuyPage } from './pages/BuyPage';
import { SLHomepage } from './pages/SLHomepage';
import {JapanRentalPage} from './pages/JapanHomepage';
import { ChatBotButton } from './components/ChatBotButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/sl-homepage" element={<SLHomepage />} />
        <Route path="/japan-rental" element={<JapanRentalPage />} />
      </Routes>

      <Footer />
      
      {/* Floating Chat Bot Button - appears on all pages */}
      <ChatBotButton />
    </div>
  );
}
