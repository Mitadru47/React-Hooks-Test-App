import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App />

  </StrictMode>
);

// React StrictMode: ENABLED
// Components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.