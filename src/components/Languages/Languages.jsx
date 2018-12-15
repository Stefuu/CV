import React from 'react'
import Flex from '../elements/Flex'
import Box from '../elements/Box'

const LanguageItem = (props) => (
  <Box mb={5}>
    <Box>
      <strong>{props.name}</strong><span> - {props.level}</span>
    </Box>
  </Box>
)

const Languages = (props) => (
  <Flex
    mb={30}
    width='100%'
    flexDirection='column'>
    <Box
      mb={5}
      fontSize={24}
      color='#cc7000'>
      <strong>Idiomas:</strong>
    </Box>
    <LanguageItem
      name='Português'
      level='Nativo'
    />
    <LanguageItem
      name='Inglês'
      level='Intermediário'
    />
    <LanguageItem
      name='Espanhol'
      level='Básico'
    />
  </Flex>
)

export default Languages
