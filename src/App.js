import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Start } from './pages/Start.js';
import { CV } from './pages/CV.js';
import { Portfolio } from './pages/Portfolio.js';
import { About } from './pages/About.js';
import { Navigation } from './components/Navigation.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Start />} path="/" exact />
        <Route element={<CV />} path="cv" exact />
        <Route element={<Portfolio />} path="portfolio" exact />
        <Route element={<About />} path="about" exact />
      </Routes>
    </Router>
  );
}

export default App;
