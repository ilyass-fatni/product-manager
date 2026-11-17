import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Navbar from './Components/Navbar'

// monte l'application dans le DOM
createRoot(document.getElementById('root')).render(
  // active des vérifications supplémentaires en développement
  <StrictMode>
    {/* active le routage par URL dans toute l'app */}
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </StrictMode>
)
