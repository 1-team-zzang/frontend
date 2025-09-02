import { createRoot } from 'react-dom/client'

import App from './app/App.tsx'
import './index.css'

if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser')
  worker.start()
}

createRoot(document.getElementById('root')!).render(<App />)
