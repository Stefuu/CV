import React from 'react'
import { render } from 'react-testing-library'
import Languages from './Languages'
import data from '../../static/data/data.json'

describe('Languages', () => {
  it('Deve renderizar [snapshot]', async () => {
    const { container } = render(<Languages {...data.languages} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
