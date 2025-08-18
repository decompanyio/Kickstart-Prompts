import { createRoot } from 'react-dom/client'

import Layout from '@app/layout'
import App from '@app/App'

import '@app/globals.css'

createRoot(document.getElementById('root')!).render(
  <Layout>
    <App />
  </Layout>
)
