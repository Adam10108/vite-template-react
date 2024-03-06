import './poppins.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import { App } from '@/components/App'
import { AppError } from '@/components/AppError'

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={AppError}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
