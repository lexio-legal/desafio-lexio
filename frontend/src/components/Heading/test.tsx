import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading>Text</Heading>)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })
})
