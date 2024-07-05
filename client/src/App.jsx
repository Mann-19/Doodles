import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';

import Home from './pages/Home';
import Join from './pages/Join';
import Game from './pages/Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Game />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
