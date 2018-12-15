import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../components/themes/default'
import Flex from '../components/elements/Flex'
import Header from '../components/Header'
import Xperience from '../components/Xperience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Languages from '../components/Languages'
import data from '../static/data/data.json'

const Container = styled(Flex)`
    margin: 0 auto;
    border-radius: 8px;
    padding: 25px;
    font-family: Lato;
`

const App = () => {
  if (!data) return null

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={[600, 600, 800]}>
        <Flex
          alignItems={['center', 'flex-start']}
          width='100%'
          flexDirection='column'>
          <Header {...data.header} />
          <Xperience {...data.xperience} />
          <Education {...data.education} />
          <Skills skills={data.skills} />
          <Languages {...data.languages} />
        </Flex>
      </Container>
    </ThemeProvider>
  )
}

export default App
