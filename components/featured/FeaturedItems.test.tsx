import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FeaturedItems from './FeaturedItems'
import { FeaturedItemsData } from '../../utils/FeaturedItems'

describe('<FeaturedItems />', () => {
  test('it should mount', () => {
    render(<FeaturedItems items={FeaturedItemsData} />)
    const featured = screen.getByTestId('featured')
    expect(featured).toBeInTheDocument()
  })

  // should render correct title
  test('it should render correct title', () => {
    render(<FeaturedItems items={FeaturedItemsData} />)
    const title = screen.getByText('Featured Items')
    expect(title).toBeInTheDocument()
  })

  // should render images correctly
  test('it should render images correctly', async () => {
    render(<FeaturedItems items={FeaturedItemsData} />)
    const images = screen.getAllByTestId('featured-item-image')
    waitFor(() => {
      expect(images).toHaveLength(FeaturedItemsData.length)
    })
  })

  test('it should render the correct number of items', async () => {
    render(<FeaturedItems items={FeaturedItemsData} />)
    const featuredItems = screen.getByTestId('featured-items')
    const slides = featuredItems.querySelectorAll('.featured-item')
    waitFor(() => {
      expect(slides.length).toBe(FeaturedItemsData.length)
    })
  })

  //should have next prev buttons
  test('it should have custom next prev buttons', async () => {
    render(<FeaturedItems items={FeaturedItemsData} />)
    const featuredItems = screen.getByTestId('featured-items')
    const nextButton = featuredItems.querySelector('.next')
    const prevButton = featuredItems.querySelector('.previous')
    waitFor(() => {
      expect(nextButton).toBeInTheDocument()
      expect(prevButton).toBeInTheDocument()
    })
  })
})
