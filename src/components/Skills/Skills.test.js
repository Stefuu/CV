import React from 'react'
import { render } from 'react-testing-library'
import Skills from './Skills'
import data from '../../static/data/data.json'

describe('Skills', () => {
  it('Deve renderizar [snapshot]', async () => {
    const { container } = render(<Skills skills={data.skills} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
