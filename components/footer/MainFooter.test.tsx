import { render } from '@testing-library/react'
import Footer from './MainFooter'
import '@testing-library/jest-dom'

describe('Footer', () => {
  it('render the Footer component', () => {
    const { getByTestId } = render(<Footer />)
    const footer = getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })
})
