import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../components/themes/default'
import Flex from '../components/elements/Flex'
import Header from '../components/Header'
import Xperience from '../components/Xperience'
import Skills from '../components/Skills'

const Container = styled(Flex)`
    margin: 0 auto;
    border-radius: 8px;
    padding: 25px;
    font-family: Lato;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Container
      maxWidth={[600, 600, 800]}>
      <Flex
        alignItems={['center', 'flex-start']}
        width='100%'
        flexDirection='column'>
        <Header />
        <Xperience />
        <Skills />
      </Flex>
    </Container>
  </ThemeProvider>
)

export default App
