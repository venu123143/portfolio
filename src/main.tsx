// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/helpers/Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter >
    <ThemeProvider>
      <HelmetProvider>
        <Layout>
          <App /> 
        </Layout>
      </HelmetProvider>
    </ThemeProvider>
  </BrowserRouter>,
)
