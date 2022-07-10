import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Reviews from './Reviews'

describe('<Reviews />', () => {
  test('it should mount', () => {
    render(<Reviews />)
    const reviews = screen.getByTestId('Reviews')
    expect(reviews).toBeInTheDocument()
  })

  // should render correct title
  test('it should render correct title', () => {
    render(<Reviews />)
    const title = screen.getByText('WHAT THEY’RE SAYING')
    expect(title).toBeInTheDocument()
  })
})
