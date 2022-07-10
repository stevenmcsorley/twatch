import { render } from '@testing-library/react'
import Header from './Header'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('render the Header  component', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Vintage Room')).toBeVisible()
  })
})
