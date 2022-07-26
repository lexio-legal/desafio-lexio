import { render, screen } from '@testing-library/react'

import Contract from '.'

describe('<Contract />', () => {
  it('should render the heading', () => {
    render(<Contract />)

    expect(screen.getByRole('heading', { name: /Contract/i })).toBeInTheDocument()
  })
})
