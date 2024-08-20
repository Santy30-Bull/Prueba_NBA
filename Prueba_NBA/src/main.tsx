import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Prueba from './components/Component1'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Prueba />
  </StrictMode>,
)
