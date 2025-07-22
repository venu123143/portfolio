import React, { Suspense } from 'react';
import { ThemeToggle } from '@/components/helpers/ThemeToggle';
import './css/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "@/routes/Home";

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
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
