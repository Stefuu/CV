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
    font-family: sans-serif;
`

const Header = () => (
  <Flex
    justifyContent='center'
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
      <HeaderItem
        name='Email'
        text='mineiro.guaxupe@gmail.com'
      />
      <HeaderItem
        name='Phone'
        text='11 97027-9708'
      />

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
)

const HeaderItem = (props) => (
  <Box
    mt={10}
    color='#2B547E'
    fontSize={[16, 16, 20]}>
    <span style={{ fontWeight: 'bold' }}>{props.name}: </span>
    <span>{props.text}</span>
  </Box>
)

const App = () => (
  <ThemeProvider theme={theme}>
    <Container
      maxWidth={['100%', 600, 800]}>
      <Flex
        width='100%'
        flexDirection='column'>
        <Header />
        <Box
          mt={40}>
          <Box
            fontSize={24}
            color='#cc7000'>
            <strong>Experiências:</strong>
          </Box>
          <Box
            mt={10}>
            <Box
              mb={5}
              fontSize={18}>
              <strong>- Universo Online (UOL)</strong>
            </Box>
            <Box ml={10}>
              <Box
                mb={3}
                fontSize={16}>
                <span>De Jul/2012 a Dez/2017</span>
              </Box>
              <Box>
                <span>Cargo: Desenvolvedor Front-End Pleno</span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  </ThemeProvider>
)

export default App
