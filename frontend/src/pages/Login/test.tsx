import { render, screen } from '@testing-library/react'

import Login from '.'

describe('<Login />', () => {
  it('should render the heading', () => {
    render(<Login />)

    expect(screen.getByRole('heading', { name: /Login/i })).toBeInTheDocument()
  })
})
