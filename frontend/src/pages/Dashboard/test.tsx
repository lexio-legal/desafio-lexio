import { render, screen } from '@testing-library/react'

import Dashboard from '.'

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    render(<Dashboard />)

    expect(screen.getByRole('heading', { name: /Dashboard/i })).toBeInTheDocument()
  })
})
