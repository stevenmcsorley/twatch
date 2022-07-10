import { render, screen } from '@testing-library/react'
import SuperCardOne from './SuperCardOne'

// Test SupercardOne component
describe('SuperCardOne', () => {
  // title, image, imageAlt, description, buttonTitle
  // has title
  test('has title', () => {
    render(
      <SuperCardOne
        title="kitchen"
        image="https://source.unsplash.com/random/?kitchen"
        imageAlt="kitchen"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus lectus magna. Nam a faucibus enim."
        buttonTitle="Learn More"
      />
    )
    const title = screen.getByTestId('title')
    expect(title).toBeInTheDocument()
  })

  it('has description', () => {
    const { getByText } = render(
      <SuperCardOne
        title="kitchen"
        image="https://source.unsplash.com/random/?kitchen"
        imageAlt="kitchen"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus lectus magna. Nam a faucibus enim."
        buttonTitle="Learn More"
      />
    )
    expect(
      getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus lectus magna. Nam a faucibus enim.'
      )
    ).toBeVisible()
  }),
    // has button
    it('has button', () => {
      const { getByText } = render(
        <SuperCardOne
          title="kitchen"
          image="https://source.unsplash.com/random/?kitchen"
          imageAlt="kitchen"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus lectus magna. Nam a faucibus enim."
          buttonTitle="Learn More"
        />
      )
      expect(getByText('Learn More')).toBeVisible()
    }),
    // has content
    it('has content', () => {
      const { getByText } = render(
        <SuperCardOne
          title="kitchen"
          image="https://source.unsplash.com/random/?kitchen"
          imageAlt="kitchen"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus lectus magna. Nam a faucibus enim."
          buttonTitle="Learn More"
        />
      )
      expect(
        getByText(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus lectus magna. Nam a faucibus enim.'
        )
      ).toBeVisible()
    }),
    // image src is correct
    it('image src is correct', () => {
      const { getByAltText } = render(
        <SuperCardOne
          title="kitchen"
          image="https://source.unsplash.com/random/?kitchen"
          imageAlt="kitchen"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus lectus magna. Nam a faucibus enim."
          buttonTitle="Learn More"
        />
      )
      expect(getByAltText('kitchen')).toHaveAttribute(
        'src',
        'https://source.unsplash.com/random/?kitchen'
      )
    })
})
