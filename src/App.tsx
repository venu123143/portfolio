import "./css/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './routes/Portfolio';
import Default from './routes/Default';
import ModernFilter from "./routes/TableFilter"

const App = () => {
  return (
    <Router future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/filter" element={<ModernFilter />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Router >
  );
}

export default App;