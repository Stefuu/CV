import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../components/themes/default'
import Flex from '../components/elements/Flex'
import Box from '../components/elements/Box'
import Me from '../assets/me.jpeg'

const Image = styled.img`
    height: 100%;
    border-radius: 50%;
`

const Container = styled(Flex)`
    margin: 0 auto;
    border-radius: 8px;
    padding: 25px;
    font-family: Lato;
`

const HeaderItem = (props) => (
  <Box
    style={{ whiteSpace: 'nowrap' }}
    mt={10}
    color='#2B547E'
    fontSize={[16, 16, 20]}>
    <span style={{ fontWeight: 'bold' }}>{props.name}: </span>
    <span>{props.text}</span>
  </Box>
)

const Header = () => (
  <Flex
    flexDirection={['column', 'row', 'row']}
    borderBottom='1px solid #e6e6e6'
    pb={40}
    alignItems='center'>
    <Box
      p={15}
      pr={25}
      height={130}>
      <Image src={Me} alt='Stéfano' />
    </Box>
    <Box>
      <Box
        mb={15}
        fontSize={[28]}>
        <strong>Stéfano Damiano</strong>
        <Box
          fontSize={[23]}>
          <strong>Desenvolvedor Front-End</strong>
        </Box>
      </Box>
      <Flex
        flexDirection={['column', 'row', 'row']}>
        <Box>
          <HeaderItem
            name='Email'
            text='mineiro.guaxupe@gmail.com'
          />
          <HeaderItem
            name='Phone'
            text='11 97027-9708'
          />
        </Box>
        <Box ml={[0, 10, 10]}>
          <HeaderItem
            name='Nasc'
            text='08/08/1989'
          />
          <HeaderItem
            name='Phone'
            text='11 97027-9708'
          />
        </Box>
      </Flex>
    </Box>
  </Flex>
)

const App = () => (
  <ThemeProvider theme={theme}>
    <Container
      maxWidth={[270, 600, 800]}>
      <Flex
        alignItems={['center', 'flex-start']}
        width='100%'
        flexDirection='column'>
        <Header />
        <Xperience />
      </Flex>
    </Container>
  </ThemeProvider>
)

const Xperience = (props) => (
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
      />
      <XperienceItem
        company='- TOVS (idexo)'
        duration='De: Jan/2018 até Hoje'
        position='Cargo: Desenvolvedor Front-End Sênior'
      />
    </Flex>
  </Box>
)

const XperienceItem = (props) => (
  <Box
    width={['auto', '50%']}
    mb={20}>
    <Box
      mb={5}
      fontSize={18}>
      <strong>{props.company}</strong>
    </Box>
    <Box ml={10}>
      <Box
        mb={5}
        fontSize={16}>
        <span>{props.duration}</span>
      </Box>
      <Box mb={5}>
        <span>{props.position}</span>
      </Box>
      <Box
        width='90%'
        mb={5}>
        <span>{props.description}</span>
      </Box>
      <Box
        width='90%'
        mb={5}>
        <Box><span>Destaques:</span></Box>
        {
          props.highlights && <ul>
            {props.highlights.map((item, index) => (
              <li>{item}</li>
            ))}
          </ul>
        }
      </Box>
    </Box>
  </Box>
)

export default App
