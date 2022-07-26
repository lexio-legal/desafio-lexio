import { render, screen } from '@testing-library/react'

import InputField from '.'

describe('<InputField />', () => {
  it('should render the heading', () => {
    render(<InputField />)

    expect(
      screen.getByRole('heading', { name: /InputField/i })
    ).toBeInTheDocument()
  })
})
