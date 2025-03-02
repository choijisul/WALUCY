import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@landing/index.css'
import "@landing/font.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
