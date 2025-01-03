import "./css/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './routes/Portfolio';
import Default from './routes/Default';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Router>
  );
}

export default App;