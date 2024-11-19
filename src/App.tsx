import React from 'react'
import "./css/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Default from './routes/Default';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;