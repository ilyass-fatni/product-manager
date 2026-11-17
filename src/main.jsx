import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Navbar from './Components/Navbar'

// monte l'application dans le DOM
//DOM: l'interface de programmation qui représente la structure d'une page Web (sous forme d'un arbre d'objets) que le navigateur utilise pour afficher le HTML et permettre à JavaScript de modifier l'écran
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
