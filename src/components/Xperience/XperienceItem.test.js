import React from 'react'
import { render } from 'react-testing-library'
import XperienceItem from './XperienceItem'

const data = {
  'company': '- KAITS - Sistema educacional',
  'duration': 'De: Fev/2011 até Jan/2012',
  'position': 'Cargo: Estagiário',
  'description': 'Descrição: Atuação com javascript vanilla na construção e manutenção de um sistema web para escolas de idioma',
  'highlights': [
    '-Uso de javascript sem nenhum framework foi uma experiência interessante, principalmente por estar começando a usar js na época'
  ]
}

describe('XperienceItem', () => {
  it('Deve renderizar [snapshot]', async () => {
    const { container } = render(<XperienceItem {...data} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
