import { render, screen } from '@testing-library/react'

import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the heading', () => {
    render(<Navbar />)

    expect(screen.getByRole('heading', { name: /Navbar/i })).toBeInTheDocument()
  })
})
