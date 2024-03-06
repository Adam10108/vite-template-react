'use client'

import { PropsWithChildren } from 'react'
import { FallbackProps } from 'react-error-boundary'

export const AppError = ({ error }: PropsWithChildren<FallbackProps>) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>Error message: {error.message}</pre>
    </div>
  )
}
