import React from 'react'
import { render } from 'react-testing-library'
import Header from './Header'
import data from '../../static/data/data.json'

describe('Header', () => {
  it('Deve renderizar [snapshot]', async () => {
    const { container } = render(<Header {...data.header} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
