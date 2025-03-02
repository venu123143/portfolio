import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
