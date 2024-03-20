import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Qrcode from './pages/Qrcode/index';
import About from './pages/About/Index';
import Navigation from './navigation/navigation';
import Contact from './pages/Contact';
import Home from '../src/pages/Home/index';
import TextCompare from './pages/Textcompare';
function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/Qrcode" element={<Qrcode />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TextCompare" element={<TextCompare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
