//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
