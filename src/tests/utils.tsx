import { render } from '@testing-library/react'

export type Options = Parameters<typeof render>[1]

const customRender = (ui: React.ReactElement, options: Options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
