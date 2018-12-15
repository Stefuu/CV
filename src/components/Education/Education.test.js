import React from 'react'
import { render } from 'react-testing-library'
import Education from './Education'
import data from '../../static/data/data.json'

describe('Education', () => {
  it('Deve renderizar [snapshot]', async () => {
    const { container } = render(<Education {...data.education} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
