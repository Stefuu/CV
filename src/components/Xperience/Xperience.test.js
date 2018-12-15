import React from 'react'
import { render } from 'react-testing-library'
import Xperience from './Xperience'
import data from '../../static/data/data.json'

describe('Xperience', () => {
  it('Deve renderizar [snapshot]', async () => {
    const { container } = render(<Xperience {...data.xperience} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
