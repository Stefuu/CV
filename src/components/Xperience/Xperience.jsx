import React from 'react'
import Flex from '../elements/Flex'
import Box from '../elements/Box'
import XperienceItem from '../Xperience/XperienceItem'

const Xperience = () => (
  <Box
    width='100%'
    mt={40}>
    <Box
      mb={[30, 0]}
      fontSize={24}
      color='#cc7000'>
      <strong>Experiências:</strong>
    </Box>
    <Flex
      width='100%'
      flexWrap='wrap'
      flexDirection={['column', 'row']}
      alignItems={['flex-start', 'space-between']}
      mt={10}>
      <XperienceItem
        company='- KAITS - Sistema educacional'
        duration='De: Fev/2011 até Jan/2012'
        position='Cargo: Estagiário'
        description='Descrição: Atuação com javascript vanilla na construção e manutenção de um sistema web para escolas de idioma'
        highlights={[
          '-Uso de javascript sem nenhum framework foi uma experiência interessante, principalmente por estar começando a usar js na época'
        ]}
      />
      <XperienceItem
        company='- Universo Online (UOL)'
        duration='De: Jul/2012 até Dez/2017'
        position='Cargo: Desenvolvedor Front-End Pleno'
        description='Descrição: Criação e manutenção de páginas do portal (layout, integrações com back-end e sistemas externos), criação e manutenção de sistemas internos (principalmente em node), criação de serviços'
        highlights={[
          '- Passei por diversas areas de desenvolvimento da empresa, ganhando bom conhecimento das dificuldades e desafios de colocar e manter um portal com milhões de acessos em produção.',
          '- Passei pelas dificuldades de se criar layouts responsivos cross-browser que precisam rodar em navegadores antigos.',
          '- Desenvolvi integrações com ferramentas experimentais do google e facebook. Como o UOL tinha parceria com essas empresas, e era um bom laboratório pela quantidade de acessos, eles liberavam algumas ferramentas novas antes do lançamento. Ferramentas como AMP, Instant Articles e Facebook Messenger BOTS.',
          '- Aprendi muito sobre arquitetura de back-end trabalhando na criação do micro-serviço do Facebook Messenger BOT, pelo fato de ser necessário fazer envio de milhões de mensagens (quando aparecia alguma notícia bombástica), aprendi muito sobre como escalar uma aplicação node, kubernetes, sobre uso de filas (rabbitmq principalmente) e banco de dados não relacional (mongodb)'
        ]}
      />
      <XperienceItem
        company='- TOVS (idexo)'
        duration='De: Jan/2018 até Hoje'
        position='Cargo: Desenvolvedor Front-End Sênior'
        description='Descrição: Criação e manutenção de um e-commerce capaz de se adequar a regras de negócio complexas de produtos da empresa'
        highlights={[
          '- Ambiente de inovação com intenção de renovar a cultura da velha TOTVS. Trabalhamos lado a lado com start-ups incubadas pela TOTVS, o que permite agregar muito sobre tecnologias e soluções muito quentes',
          '- Tivemos a oportunidade de começar tudo do zero, portanto escolhemos a stack, que é: React com styled-components, styled-system, fazendo uso de context API, Graphql com Relay modern, Node (express) e MQTT (para mensagem entre micro-serviços)',
          '- Criação de uma arquitetura de execução de regras de negócio no front-end que não são fixas no mesmo. Usamos uma estrutura declarativa com https://github.com/jwadhams/json-logic-js que permite que as regras sejam geradas pelo back-end e apénas consumidas e executadas pelo front (evitando um oceano de condições no front).'
        ]}
      />
    </Flex>
  </Box>
)

export default Xperience
