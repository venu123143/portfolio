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
    // <div className="min-h-screen font-sans bg-background text-foreground">
    //   <header className="p-4 flex justify-end">
    //     <ThemeToggle />
    //   </header>
    //   <main className="p-8">
    //     <h1 className="text-2xl font-bold">Venu Gopal Reddy V Portfolio</h1>
    //     <p>Full Stack Developer | React.js | Node.js | TypeScript</p>
    //   </main>
    // </div>
  );
}

export default App;
