import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import App from './App.jsx'
import Galeria from './pages/Galeria.jsx'
import Navigacio from './components/Navigacio.jsx'
import Kapcsolat from './pages/Kapcsolat.jsx'
import Footer from './components/Footer.jsx'
import Szolgaltatas from './pages/Szolgaltatas.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <div style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <Navigacio />
      <main style={{flex: 1}}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/kapcsolat" element={<Kapcsolat />} />
        <Route path="/szolgaltatasaink" element={<Szolgaltatas />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </StrictMode>
  </BrowserRouter>,
)
