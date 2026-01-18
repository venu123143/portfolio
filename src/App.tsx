import { lazy, Suspense } from 'react';
import './css/App.css';
import { Routes, Route } from 'react-router-dom';
const Portfolio = lazy(() => import('@/routes/Portfolio'));
const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
)

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Portfolio />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
