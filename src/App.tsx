import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookCall from './pages/BookCall';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0F] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-call" element={<BookCall />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;