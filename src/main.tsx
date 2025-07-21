import { createRoot } from 'react-dom/client'

import './index.css'
import App from './app/App.tsx'
import { worker } from './app/mocks/browser.ts'

if (import.meta.env.MODE === 'development') {
  worker.start().then(() => {
    createRoot(document.getElementById('root')!).render(<App />)
  })
} else {
  createRoot(document.getElementById('root')!).render(<App />)
}
