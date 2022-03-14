import renderer from 'react-test-renderer'

import LikedCat from '../components/LikedCat'

const cat = {
  image: { url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg' },
  name: 'Abyssinian',
}

it('renders correctly across screens', () => {
  const tree = renderer.create(<LikedCat cat={cat} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe("", () => {
  it("accepts cat props", () => {
    const wrapper = mount(<LikedCat cat={cat} />)
    expect(wrapper.props().cat).toEqual(cat)
  })
  it("contains name", () => {
    expect(value).toBe('Abyssinian')
  })
})
